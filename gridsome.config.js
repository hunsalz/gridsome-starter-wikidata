// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome Starter Wikidata",
  siteDescription: "Gridsome Starter for Wikidata",
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX,

  templates: {
    Painting: "/:item"
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "*.*"
      }
    },
    {
      use: "gridsome-source-wikidata",
      options: {
        url: "https://query.wikidata.org/sparql",
        sparql: `SELECT DISTINCT ?item ?paintingLabel (MIN(?images) AS ?image) (MIN(?dates) AS ?date) (MIN(?locationLabels) AS ?locationLabel) (GROUP_CONCAT(DISTINCT ?materialLabel; SEPARATOR = ", ") AS ?materials) (GROUP_CONCAT(DISTINCT ?depictLabel; SEPARATOR = ", ") AS ?depicts) WHERE {
          ?painting (wdt:P31/(wdt:P279*)) wd:Q3305213;
            wdt:P170 wd:Q762;
            wdt:P18 ?images;
            wdt:P571 ?dates.
          OPTIONAL { ?painting wdt:P276 ?locations. }
          OPTIONAL { ?painting wdt:P186 ?material. }
          OPTIONAL { ?painting wdt:P180 ?depict. }
          BIND(REPLACE(STR(?painting), "^.*/", "") AS ?item)
          SERVICE wikibase:label {
            bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en".
            ?painting rdfs:label ?paintingLabel.
            ?locations rdfs:label ?locationLabels.
            ?material rdfs:label ?materialLabel.
            ?depict rdfs:label ?depictLabel.
          }
        }
        GROUP BY ?item ?painting ?paintingLabel ?image ?date ?locationLabel ?materials ?depicts
        ORDER BY (?date)`,
        typeName: "Painting",
        baseDir: "/content/images/",
        cacheEnabled: true,
        ttl: 8 * 60 * 60 * 1000,
        verbose: true
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Gridsome Starter Wikidata",
        startUrl: process.env.SITE_URL + process.env.PATH_PREFIX + "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "/manifest.json",
        disableServiceWorker: false,
        serviceWorkerPath: "/service-worker.js",
        cachedFileTypes: "js,json,css,html",
        shortName: "Starter",
        themeColor: "#666600",
        backgroundColor: "#ffffff",
        icon: "src/assets/images/website-icon.png",
        msTileImage: "",
        msTileColor: "#666600"
      }
    }
  ],

  transformers: {
    // add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  }
};
