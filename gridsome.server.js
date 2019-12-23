// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fetch = require("node-fetch");
const fs = require("fs-extra");

const DIR = process.cwd() + "/content/images/";

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
LIMIT 10`;

const stream = (data, path) => {
  console.log("Save ", path);

  const fileStream = fs.createWriteStream(path);
  return new Promise((resolve, reject) => {
    data.body.pipe(fileStream);
    data.body.on("error", err => {
      reject(err);
    });
    fileStream.on("finish", function() {
      resolve("Storing " + path + " was succesful!");
    });
  });
};

const fetchWikidata = async actions => {
  fs.ensureDirSync(DIR);

  const queryDispatcher = new SPARQLQueryDispatcher(endpointUrl);
  const collection = actions.addCollection("Record");
  const mapping = [];

  await queryDispatcher.query(sparqlQuery).then(response => {
    response.results.bindings.forEach(function(item, index) {
      let path = null;
      if (item.image) {
        let url = item.image.value;
        var filename = url.substring(url.lastIndexOf("/") + 1);
        filename = decodeURI(filename).replace(/%2C/g, ",");
        path = DIR + filename;
        // add promise to fetch image
        //promises.push(fetchImage(url, path));
        mapping.push({ url: url, path: path });
      }
      // create node
      let node = {
        item: item.painting.value.split(/[/]+/).pop(),
        painting: item.paintingLabel ? item.paintingLabel.value : "unknown",
        cover_image: path ? path : null,
        image: path ? path : null,
        location: item.locationLabel ? item.locationLabel.value : "unknown",
        year: item.date ? item.date.value.substr(0, 4) : "",
        materials: String(item.materials.value).split(", "),
        depicts: String(item.depicts.value).split(", ")
      };
      //console.log("added", node, "as " + (index + 1) + " node");
      collection.addNode(node);
    });
  });

  await Promise.all(
    mapping.map(element =>
      fetch(element.url)
        .then(response => stream(response, element.path))
        .catch(error => console.log(`Error in executing ${error}`))
    )
  ).then(response => console.log("Overall result", response));
};

module.exports = function(api) {
  api.loadSource(async actions => {
    await fetchWikidata(actions);
  });
};
