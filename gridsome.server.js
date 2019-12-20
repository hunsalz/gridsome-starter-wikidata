// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fetch = require("node-fetch");
const fs = require("fs");
const axios = require("axios");

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
ORDER BY ASC(?date)`;

async function run(iterator) {
  for (let [index, item] of iterator) {
    console.log(index + " : Downloading " + item.url);
    download(item.url, item.path);
  }
}

const download = (url, image_path) =>
  axios({
    url,
    responseType: "stream"
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on("finish", () => resolve())
          .on("error", e => reject(e));
      })
  );

module.exports = function(api) {
  const CWD = process.cwd();
  api.loadSource(async actions => {
    const queryDispatcher = new SPARQLQueryDispatcher(endpointUrl);
    const collection = actions.addCollection("Record");
    var downloads = [];
    await queryDispatcher.query(sparqlQuery).then(response => {
      response.results.bindings.forEach(item => {
        let path;
        if (item.image) {
          let url = item.image.value;
          var filename = url.substring(url.lastIndexOf("/") + 1);
          filename = decodeURI(filename).replace(/%2C/g, ",");
          path = CWD + "/content/images/" + filename;

          downloads.push({ url: item.image.value, path: path });
        }
        collection.addNode({
          id: item.id,
          source: item.painting.value,
          painting: item.paintingLabel ? item.paintingLabel.value : "unknown",
          cover_image: path,
          image: path,
          location: item.locationLabel ? item.locationLabel.value : "unknown",
          date: item.date ? item.date.value : "",
          materials: item.materials
            ? String(item.materials.value).split(", ")
            : [],
          depicts: item.depicts ? String(item.depicts.value).split(", ") : []
        });
      });
    });

    const workers = new Array(5).fill(downloads.entries()).map(run);
    await Promise.all(workers).then(() => console.log("Downloads done"));
  });
};
