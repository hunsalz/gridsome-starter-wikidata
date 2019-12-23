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
LIMIT 100`;

/**
 * Store data to path
 * @param {*} data
 * @param {*} path
 */
const store = (data, path) => {
  const fileStream = fs.createWriteStream(path);
  return new Promise((resolve, reject) => {
    data.body.pipe(fileStream);
    data.body.on("error", err => {
      reject(err);
    });
    fileStream.on("finish", function() {
      resolve("Storing " + path + " was successful!");
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
  const images = [];
  // query Wikidata and process each item
  await queryDispatcher.query(sparqlQuery).then(response => {
    response.results.bindings.forEach(item => {
      // prepare image src & dest
      let path = null;
      if (item.image) {
        let url = item.image.value;
        let filename = url.substring(url.lastIndexOf("/") + 1);
        filename = decodeURI(filename).replace(/%2C/g, ",");
        path = DIR + filename;
        images.push({ src: url, dest: path });
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
  // fetch & store remote images locally
  fs.ensureDirSync(DIR);
  await Promise.all(
    images.map(img =>
      fetch(img.src)
        .then(response => store(response, img.dest))
        .catch(error => console.log(`Error in executing ${error}`))
    )
  ).then(response => console.log("Overall result", response));
};

// Server API hooks

module.exports = function(api) {
  api.loadSource(async actions => {
    await fetchWikidata(actions);
  });
};
