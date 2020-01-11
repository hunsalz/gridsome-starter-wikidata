const axios = require("axios").default;
const fs = require("fs-extra");
const cliProgress = require("cli-progress");

const multibar = new cliProgress.MultiBar(
  {
    format:
      "Loading [{bar}] {filename} | {duration}sec | {value}/{total} KBytes",
    stopOnComplete: true,
    clearOnComplete: true,
    hideCursor: true
  },
  cliProgress.Presets.shades_grey
);

const DIR = process.cwd() + "/content/images/";

// SPARQL source from https://w.wiki/ENJ

class SPARQLQueryDispatcher {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  query(sparqlQuery) {
    const fullUrl = this.endpoint + "?query=" + encodeURIComponent(sparqlQuery);
    return axios({
      method: "get",
      url: fullUrl,
      headers: { Accept: "application/sparql-results+json" }
    })
      .then(response => response.data)
      .catch(error => console.log(`SPARQL ${fullUrl} failed: ${error}`));
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
ORDER BY ASC(?date)`;

/**
 * Fetch data from Wikidata.
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
      let filename = null;
      if (item.image) {
        let uri = item.image.value;
        filename = uri.substring(uri.lastIndexOf("/") + 1);
        filename = decodeURI(filename).replace(/%2C/g, ",");
        // add src and destination dir + filename to download list
        downloads.push({ src: uri, dir: DIR, filename: filename });
      }
      // create node from item properties
      collection.addNode({
        item: item.painting.value.split(/[/]+/).pop(),
        painting: item.paintingLabel ? item.paintingLabel.value : "unknown",
        cover_image: filename ? DIR + filename : null,
        image: filename ? DIR + filename : null,
        location: item.locationLabel ? item.locationLabel.value : "unknown",
        year: item.date ? item.date.value.substr(0, 4) : "",
        materials: String(item.materials.value).split(", "),
        depicts: String(item.depicts.value).split(", ")
      });
    });
  });
  return downloads;
};

/**
 * Stream response to file.
 * @param {*} response
 * @param {*} dir
 * @param {*} filename
 */
const stream2File = (response, dir, filename) => {
  // ensure that directory exists
  fs.ensureDirSync(dir);
  // get content length
  let totalLength = parseInt(response.headers["content-length"], 10);
  // create write stream and progress bar
  const path = dir + filename;
  const writer = fs.createWriteStream(path);
  const bar = multibar.create(Math.round(totalLength / 1024), 0, {
    filename: filename
  });
  response.data.on("data", chunk => {
    if (bar) {
      bar.update(Math.round(chunk.length / 1024));
    }
  });
  // start streaming
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

const download = async downloads => {
  await Promise.all(
    downloads.map(download =>
      axios({
        method: "get",
        url: download.src,
        responseType: "stream"
      })
        .then(response =>
          stream2File(response, download.dir, download.filename).catch(error =>
            console.log(
              `Saving ${download.dir}${download.filename} failed: ${error}`
            )
          )
        )
        .catch(error =>
          console.log(`Downloading ${download.src} failed: ${error}`)
        )
    )
  );
};

// Server API hooks

module.exports = function(api) {
  api.loadSource(async actions => {
    console.log("Fetching Wikidata ...");
    const downloads = await fetchWikidata(actions);
    if (process.env.DOWNLOAD_MEDIA === "true") {
      console.log("Starting media download(s) ...");
      await download(downloads);
    }
    // finally stop any progress bar
    multibar.stop();
  });
};
