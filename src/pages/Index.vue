<template>
  <Layout :show-back-link="false" :toggle-view="showToggleView()">
    <div>
      <TagCloud :event="removeTag()" :tags="filter" />
      <div class="masonry">
        <div class="cards" v-for="edge in computeCards" :key="edge.node.id">
          <CardLayout class="card-layout" :painting="edge.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  paintings: allPainting(sortBy: "date", order: ASC) {
    edges {
      node {
        id
        path
        item
        title: paintingLabel
        image
        cover_image: image (width: 770, height: 380, blur: 10)
        year: date (format: "YYYY")
  			location: locationLabel
        materials
        depicts
      }
    }
  }
}
</page-query>

<script>
import CardLayout from "~/components/CardLayout.vue";
import TagCloud from "~/components/TagCloud.vue";
import {
  ADD_TAG,
  REMOVE_TAG,
  TOGGLE_FAVORITE,
  TOGGLE_VIEW
} from "~/components/js/Event.js";
import { DASHBOARD, FAVORITES } from "~/components/js/View.js";

export default {
  components: {
    CardLayout,
    TagCloud
  },
  data: function() {
    return {
      view: DASHBOARD,
      filter: [],
      favorites: []
    };
  },
  metaInfo() {
    return {
      title: this.$page.metadata.siteName,
      meta: [
        {
          name: "description",
          content: this.$page.metadata.siteDescription
        }
      ]
    };
  },
  created: function() {
    // subscribe to event bus
    this.$eventBus.$on(ADD_TAG, this.onAddTag);
    this.$eventBus.$on(REMOVE_TAG, this.onRemoveTag);
    this.$eventBus.$on(TOGGLE_FAVORITE, this.onChangeFavorite);
    this.$eventBus.$on(TOGGLE_VIEW, this.onToggleView);
    // subscribe to (re)-render events
    if (process.isClient) {
      let _this = this;
      ["load", "resize"].forEach(function(event) {
        window.addEventListener(event, _this.resizeAllCards);
      });
    }
    // create tag cloud
    this.$page.paintings.edges.forEach(edge => {
      // basic tags
      edge.node.tags = [edge.node.year, edge.node.location];
      // concat with available depicts
      edge.node.tags = edge.node.tags.concat(edge.node.depicts.split(","));
      // clean up empty tags = ""
      edge.node.tags = edge.node.tags.filter(item => item);
      // create a duplicate-free array
      edge.node.tags = [...new Set(edge.node.tags)];
    });
  },
  mounted: function() {
    // call after the next DOM update cycle
    if (process.isClient) {
      let _this = this;
      this.$nextTick(function() {
        _this.resizeAllCards();
      });
    }
  },
  watch: {
    view() {
      if (process.isClient) {
        let _this = this;
        this.$nextTick(function() {
          _this.resizeAllCards();
        });
      }
    },
    filter() {
      if (process.isClient) {
        let _this = this;
        this.$nextTick(function() {
          _this.resizeAllCards();
        });
      }
    }
  },
  beforeDestroy() {
    // unsubscribe from all event bus listeners at once
    this.$eventBus.$off();
    // unsubscribe from all other event listeners
    if (process.isClient) {
      let _this = this;
      ["load", "resize"].forEach(function(event) {
        window.removeEventListener(event, _this.resizeAllCards);
      });
    }
  },
  computed: {
    computeCards: function() {
      // compute cards depending on current view
      // ... in case of favorite view
      if (this.view === FAVORITES && this.favorites.length > 0) {
        // filter matching cards
        return this.$page.paintings.edges.filter(
          edge => this.favorites.indexOf(edge.node.item) > -1
        );
      }
      // otherwise show standard dashboard ...
      return this.$page.paintings.edges.filter(
        edge =>
          // a card is visible if all filter tags matches; true for all cards if filter.length == 0
          edge.node.tags.filter(tag => this.filter.includes(tag)).length ===
          this.filter.length
      );
    }
  },
  methods: {
    // add a new tag and keep filter duplicate-free
    onAddTag: function(tag) { 
      this.filter.push(tag);
      this.filter = [...new Set(this.filter)];
    },
    // remove a tag from existing tag filter
    onRemoveTag: function(tag) {
      let index = this.filter.indexOf(tag);
      this.filter.splice(index, 1);
    },
    // control changes of favorites
    onChangeFavorite: function(item) {
      // toggle item as favorite accordingly
      let index = this.favorites.indexOf(item);
      if (index != -1) {
        this.favorites.splice(index, 1);
        // toggle view to 'dashbaord' as soon as last favorite item is removed
        if (this.favorites.length === 0) {
          this.view = DASHBOARD;
        }
        // add if not in place
      } else {
        this.favorites.push(item);
      }
    },
    // set view setting
    onToggleView: function(view) {
      this.view = view;
    },
    // decide if toggle is visible
    showToggleView: function() {
      return this.favorites.length > 0 ? true : false;
    },
    removeTag: function() {
      return REMOVE_TAG;
    },
    // resize an individual card
    resizeCard(card) {
      let grid = document.getElementsByClassName("masonry")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );
      /*
       * Spanning for any brick = S
       * Grid's row-gap = G
       * Size of grid's implicitly create row-track = R
       * Height of item content = H
       * Net height of the item = H1 = H + G
       * Net height of the implicit row-track = T = G + R
       * S = H1 / T
       */
      let rowSpan = Math.ceil(
        (card.querySelector(".card-layout").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      // set the spanning as calculated above (S)
      card.style.gridRowEnd = "span " + rowSpan;
    },
    // resize all cards
    resizeAllCards() {
      let allCards = document.getElementsByClassName("cards");
      // loop through the above list and execute the spanning function to each masonry item
      allCards.forEach(card => this.resizeCard(card));
    }
  }
};
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1248px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.masonry {
  display: grid;
  grid-gap: 1em;
  grid-auto-rows: 0;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
