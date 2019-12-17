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
const sparqlQuery = `
SELECT ?itemLabel ?objectLabel ?image ?creatorLabel ?from ?locationLabel (GROUP_CONCAT(DISTINCT ?materialLabel;separator=", ") AS ?materials) (GROUP_CONCAT(DISTINCT ?depictLabel;separator=", ") AS ?depicts)
WHERE
{
  ?item wdt:P31/wdt:P279* wd:Q3305213 .
  ?item wdt:P180 ?object .
  ?object wdt:P279* wd:Q47652 . 
  OPTIONAL { ?item wdt:P18 ?image }
  OPTIONAL { ?item wdt:P170 ?creator }
  OPTIONAL { ?item wdt:P571 ?from }
  OPTIONAL { ?item wdt:P276 ?location }
  OPTIONAL { ?item wdt:P186 ?material }
  OPTIONAL { ?item wdt:P180 ?depict }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],de,en".
                         ?item rdfs:label ?itemLabel .
                         ?object rdfs:label ?objectLabel .
                         ?creator rdfs:label ?creatorLabel .
                    
                         ?location rdfs:label ?locationLabel .
                         ?material rdfs:label ?materialLabel .
                         ?depict rdfs:label ?depictLabel .}
}
GROUP BY ?itemLabel ?objectLabel ?image ?creatorLabel ?from ?locationLabel ?materials ?depicts
ORDER BY ?from
LIMIT 10`;

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
    await queryDispatcher.query(sparqlQuery).then(response => {
      response.results.bindings.forEach(item => {
        let path;
        if (item.image) {
          let url = item.image.value;
          var filename = url.substring(url.lastIndexOf("/") + 1);
          path = CWD + "/content/images/" + filename + ".jpeg";
          download(item.image.value, path);
        }
        collection.addNode({
          id: item.id,
          title: item.itemLabel ? item.itemLabel.value : "",
          object: item.objectLabel ? item.objectLabel.value : "",
          creator: item.creatorLabel ? item.creatorLabel.value : "",
          cover_image: path,
          location: item.location ? item.image.location : "",
          materials: item.materials
            ? String(item.materials.value).split(", ")
            : [],
          depicts: item.depicts ? String(item.depicts.value).split(", ") : []
        });
      });
    });
  });
};
