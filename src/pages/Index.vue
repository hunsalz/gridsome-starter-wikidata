<template>
  <Layout :show-back-link="false" :toggle-view="showToggleView()">
    <div class="index-content">
      <TagCloud :event="removeTag()" :tags="filter" />
      <div v-if="computeCards.length === 0" class="empty-state">
        <div class="empty-state__content">
          <h2 class="empty-state__title">
            <span v-if="view === FAVORITES">No favorites yet</span>
            <span v-else-if="filter.length > 0"
              >No paintings match your filters</span
            >
            <span v-else>No paintings available</span>
          </h2>
          <p class="empty-state__message">
            <span v-if="view === FAVORITES"
              >Start adding paintings to your favorites to see them here.</span
            >
            <span v-else-if="filter.length > 0"
              >Try removing some tags to see more paintings.</span
            >
            <span v-else>There are currently no paintings to display.</span>
          </p>
          <button
            v-if="filter.length > 0"
            aria-label="Clear all filters"
            class="empty-state__button"
            @click="clearFilters"
          >
            Clear Filters
          </button>
        </div>
      </div>
      <div v-else class="masonry">
        <div v-for="edge in computeCards" :key="edge.node.id" class="cards">
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
        paintingLabel
        image
        cover_image: image (width: 770, height: 380, blur: 10)
        year: date (format: "YYYY")
        locationLabel
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
import { debounce, includes } from "lodash";
import { isClient } from "~/utils/client.js";

export default {
  components: {
    CardLayout,
    TagCloud
  },
  data() {
    return {
      view: DASHBOARD,
      filter: [],
      favorites: []
    };
  },
  metaInfo() {
    const siteName =
      this.$page.metadata?.siteName || "Gridsome Starter Wikidata";
    const siteDescription =
      this.$page.metadata?.siteDescription ||
      "A Gridsome starter showcasing Wikidata integration";
    const siteUrl =
      process.env.GRIDSOME_SITE_URL || "https://hunsalz.github.io";
    const pathPrefix =
      process.env.GRIDSOME_PATH_PREFIX || "/gridsome-starter-wikidata";
    const url = `${siteUrl}${pathPrefix}/`;

    return {
      title: siteName,
      meta: [
        {
          name: "description",
          content: siteDescription
        },
        // Open Graph meta tags
        {
          property: "og:title",
          content: siteName
        },
        {
          property: "og:description",
          content: siteDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: url
        },
        // Twitter Card meta tags
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:title",
          content: siteName
        },
        {
          name: "twitter:description",
          content: siteDescription
        }
      ]
    };
  },
  created: function () {
    // subscribe to event bus
    this.$eventBus.$on(ADD_TAG, this.onAddTag);
    this.$eventBus.$on(REMOVE_TAG, this.onRemoveTag);
    this.$eventBus.$on(TOGGLE_FAVORITE, this.onChangeFavorite);
    this.$eventBus.$on(TOGGLE_VIEW, this.onToggleView);
    // create debounced resize function for performance
    if (isClient()) {
      // bind the method to maintain 'this' context
      this.debouncedResizeAllCards = debounce(
        this.resizeAllCards.bind(this),
        250
      );
      // subscribe to (re)-render events with debounced handler
      let _this = this;
      ["load", "resize"].forEach(function (event) {
        window.addEventListener(event, _this.debouncedResizeAllCards);
      });
    }
  },
  mounted() {
    // create tag cloud (moved here because $page data is available in mounted)
    if (this.$page.paintings && this.$page.paintings.edges) {
      this.$page.paintings.edges.forEach(edge => {
        // basic tags
        edge.node.tags = [edge.node.year, edge.node.locationLabel];
        // concat with available depicts (with null safety)
        if (edge.node.depicts) {
          edge.node.tags = edge.node.tags.concat(edge.node.depicts.split(","));
        }
        // clean up empty tags = ""
        edge.node.tags = edge.node.tags.filter(item => item);
        // create a duplicate-free array
        edge.node.tags = [...new Set(edge.node.tags)];
      });
    }
    // call after the next DOM update cycle
    if (isClient()) {
      let _this = this;
      this.$nextTick(function () {
        _this.resizeAllCards();
      });
    }
  },
  watch: {
    view() {
      if (isClient()) {
        let _this = this;
        this.$nextTick(function () {
          _this.resizeAllCards();
        });
      }
    },
    filter() {
      if (isClient()) {
        let _this = this;
        this.$nextTick(function () {
          _this.resizeAllCards();
        });
      }
    }
  },
  beforeDestroy() {
    // unsubscribe from all event bus listeners at once
    this.$eventBus.$off();
    // unsubscribe from all other event listeners
    if (isClient() && this.debouncedResizeAllCards) {
      let _this = this;
      ["load", "resize"].forEach(function (event) {
        window.removeEventListener(event, _this.debouncedResizeAllCards);
      });
      // cancel any pending debounced calls
      this.debouncedResizeAllCards.cancel();
    }
  },
  computed: {
    /**
     * Computes the list of cards to display based on current view and filters
     * @returns {Array} Array of painting edges to display
     */
    computeCards: function () {
      // safety check for paintings data
      if (!this.$page.paintings || !this.$page.paintings.edges) {
        return [];
      }
      // compute cards depending on current view
      // ... in case of favorite view
      if (this.view === FAVORITES && this.favorites.length > 0) {
        // filter matching cards
        return this.$page.paintings.edges.filter(edge => {
          // Extract item from path (path format: /:item)
          const item = edge.node.path
            ? edge.node.path.replace(/^\//, "")
            : null;
          return includes(this.favorites, item);
        });
      }
      // otherwise show standard dashboard ...
      return this.$page.paintings.edges.filter(edge => {
        // a card is visible if all filter tags matches; true for all cards if filter.length == 0
        if (!edge.node.tags || !Array.isArray(edge.node.tags)) {
          return this.filter.length === 0;
        }
        return (
          edge.node.tags.filter(tag => this.filter.includes(tag)).length ===
          this.filter.length
        );
      });
    }
  },
  methods: {
    /**
     * Extracts the item ID from a painting's path
     * @param {Object} painting - The painting node
     * @returns {Object} Painting object with item property added
     */
    getPaintingWithItem(painting) {
      // Extract item from path (path format: /:item)
      const item = painting.path ? painting.path.replace(/^\//, "") : null;
      return {
        ...painting,
        item: item
      };
    },
    /**
     * Clears all active filters
     */
    clearFilters() {
      this.filter = [];
    },
    /**
     * Adds a tag to the filter list, keeping it duplicate-free
     * @param {string} tag - The tag to add to the filter
     */
    onAddTag(tag) {
      this.filter.push(tag);
      this.filter = [...new Set(this.filter)];
    },
    /**
     * Removes a tag from the filter list
     * @param {string} tag - The tag to remove from the filter
     */
    onRemoveTag(tag) {
      let index = this.filter.findIndex(t => t === tag);
      this.filter.splice(index, 1);
    },
    /**
     * Handles favorite toggle events
     * @param {string} item - The painting item ID to toggle as favorite
     */
    onChangeFavorite(item) {
      // toggle item as favorite accordingly
      let index = this.favorites.findIndex(f => f === item);
      if (index !== -1) {
        this.favorites.splice(index, 1);
        // toggle view to 'dashboard' as soon as last favorite item is removed
        if (this.favorites.length === 0) {
          this.view = DASHBOARD;
        }
        // add if not in place
      } else {
        this.favorites.push(item);
      }
    },
    /**
     * Sets the current view (dashboard or favorites)
     * @param {string} view - The view to set (DASHBOARD or FAVORITES)
     */
    onToggleView(view) {
      this.view = view;
    },
    /**
     * Determines if the toggle view button should be visible
     * @returns {boolean} True if favorites exist, false otherwise
     */
    showToggleView() {
      return this.favorites.length > 0;
    },
    /**
     * Returns the REMOVE_TAG event constant for tag cloud
     * @returns {string} The REMOVE_TAG event constant
     */
    removeTag() {
      return REMOVE_TAG;
    },
    /**
     * Resizes an individual card in the masonry grid
     * Calculates the number of grid rows the card should span based on its height
     * @param {HTMLElement} card - The card DOM element to resize
     */
    resizeCard(card) {
      if (!card) return;

      let grid = document.getElementsByClassName("masonry")[0];
      if (!grid) return;

      let cardLayout = card.querySelector(".card-layout");
      if (!cardLayout) return;

      let rowGap =
        parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ) || 0;
      let rowHeight =
        parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        ) || 10;
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
        (cardLayout.getBoundingClientRect().height + rowGap) /
          (rowHeight + rowGap)
      );
      // set the spanning as calculated above (S)
      if (rowSpan > 0) {
        card.style.gridRowEnd = "span " + rowSpan;
      }
    },
    // resize all cards
    /**
     * Resizes all cards in the masonry grid
     * Called on window resize and after view/filter changes
     */
    resizeAllCards() {
      if (!isClient()) return;
      let allCards = document.getElementsByClassName("cards");
      if (!allCards || allCards.length === 0) return;
      // loop through the above list and execute the spanning function to each masonry item
      Array.from(allCards).forEach(card => this.resizeCard(card));
    }
  }
};
</script>

<style lang="scss">
.index-content {
  width: 100%;
  max-width: 100%;
}

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
  grid-auto-rows: 10px;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--empty-state-min-height);
  padding: var(--empty-state-padding) 1em;

  &__content {
    text-align: center;
    max-width: 500px;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1em;
    color: var(--title-color);
  }

  &__message {
    font-size: 1rem;
    color: var(--body-color);
    margin-bottom: 2em;
    line-height: 1.6;
  }

  &__button {
    padding: 0.75em 1.5em;
    background-color: var(--link-color);
    color: white;
    border: none;
    border-radius: var(--radius);
    font-size: 1rem;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }

    &:focus {
      outline: 2px solid var(--link-color);
      outline-offset: 2px;
    }
  }
}
</style>
