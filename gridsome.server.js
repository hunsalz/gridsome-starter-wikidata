// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fetch = require("node-fetch");
const fs = require("fs");

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

const fetchImage = async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", err => {
      reject(err);
    });
    fileStream.on("finish", function() {
      resolve();
    });
  });
};

const fetchWikidata = async actions => {
  const CWD = process.cwd();
  const queryDispatcher = new SPARQLQueryDispatcher(endpointUrl);
  const collection = actions.addCollection("Record");
  await queryDispatcher.query(sparqlQuery).then(response => {
    response.results.bindings.forEach(function(item, index) {
      console.log(index + 1, " add node: ", item);

      let path = null;
      if (item.image) {
        let url = item.image.value;
        var filename = url.substring(url.lastIndexOf("/") + 1);
        filename = decodeURI(filename).replace(/%2C/g, ",");
        path = CWD + "/content/images/" + filename;

        fetchImage(url, path);
      }
      collection.addNode({
        id: item.id,
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
};

module.exports = function(api) {
  api.loadSource(async actions => {
    await fetchWikidata(actions);
  });
};
