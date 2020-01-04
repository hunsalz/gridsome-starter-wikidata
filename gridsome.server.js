const axios = require("axios").default;
const fetch = require("node-fetch");
const fs = require("fs-extra");

const DIR = process.cwd() + "/content/images/";

// SPARQL source from https://w.wiki/ENJ

class SPARQLQueryDispatcher {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  query(sparqlQuery) {
    const fullUrl = this.endpoint + "?query=" + encodeURIComponent(sparqlQuery);
    const headers = { Accept: "application/sparql-results+json" };

    return fetch(fullUrl, { headers }).then(body => body.json());
  }
}

const endpointUrl = "https://query.wikidata.org/sparql";
const sparqlQuery = `SELECT DISTINCT ?painting ?paintingLabel (MIN(?images) as ?image) (MIN(?dates) as ?date) (MIN(?locationLabels) as ?locationLabel) (GROUP_CONCAT(DISTINCT ?materialLabel;separator=", ") AS ?materials) (GROUP_CONCAT(DISTINCT ?depictLabel;separator=", ") AS ?depicts)
WHERE
{
  ?painting wdt:P31/wdt:P279* wd:Q3305213 ;
        wdt:P170 wd:Q762 ;
        wdt:P18 ?images ;
        wdt:P571 ?dates ;
  OPTIONAL { ?painting wdt:P276 ?locations }
  OPTIONAL { ?painting wdt:P186 ?material }
  OPTIONAL { ?painting wdt:P180 ?depict }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" .
                         ?painting rdfs:label ?paintingLabel .
                         ?locations rdfs:label ?locationLabels .
                         ?material rdfs:label ?materialLabel .
                         ?depict rdfs:label ?depictLabel . }
}
GROUP BY ?painting ?paintingLabel ?image ?date ?locationLabel ?materials ?depicts
ORDER BY ASC(?date)
LIMIT 2`;

const store = (response, path) => {
  let url = response.config.url;

  let totalLength = parseInt(response.headers["content-length"], 10);
  //console.log(totalLength);

  //console.log(`Start downloading ${url}`);

  const writer = fs.createWriteStream(path);
  //response.data.on("data", chunk => bar.update(chunk.length));
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", () => {
      resolve();
    });
    writer.on("error", err => {
      fs.unlink(path);
      reject(err);
    });
  });
};

/**
 * Fetch data from Wikidata
 * @param {*} actions
 */
const fetchWikidata = async actions => {
  const queryDispatcher = new SPARQLQueryDispatcher(endpointUrl);
  const collection = actions.addCollection("Record");
  const downloads = [];
  // query Wikidata and process each item
  await queryDispatcher.query(sparqlQuery).then(response => {
    response.results.bindings.forEach(item => {
      // prepare downloads
      let path = null;
      if (item.image) {
        let url = item.image.value;
        let filename = url.substring(url.lastIndexOf("/") + 1);
        filename = decodeURI(filename).replace(/%2C/g, ",");
        path = DIR + filename;
        // add src & dest to download list
        downloads.push({ src: url, dest: path });
      }
      // create node from item
      collection.addNode({
        item: item.painting.value.split(/[/]+/).pop(),
        painting: item.paintingLabel ? item.paintingLabel.value : "unknown",
        cover_image: path ? path : null,
        image: path ? path : null,
        location: item.locationLabel ? item.locationLabel.value : "unknown",
        year: item.date ? item.date.value.substr(0, 4) : "",
        materials: String(item.materials.value).split(", "),
        depicts: String(item.depicts.value).split(", ")
      });
    });
  });
  return downloads;
};

const download = async downloads => {
  fs.ensureDirSync(DIR);
  console.log("Starting media download ...");
  await Promise.all(
    downloads.map(download =>
      axios({
        method: "get",
        url: download.src,
        responseType: "stream"
      })
        .then(response =>
          store(response, download.dest)
            .then(() => console.log(`Saved ${download.dest} successful.`))
            .catch(error =>
              console.log(`Saving ${download.dest} failed: ${error}`)
            )
        )
        .catch(error =>
          console.log(`Downloading ${download.src} failed: ${error}`)
        )
    )
  ).then(() => console.log("Media download successful."));
};

// Server API hooks

module.exports = function(api) {
  api.loadSource(async actions => {
    const downloads = await fetchWikidata(actions);
    await download(downloads);
  });
};
