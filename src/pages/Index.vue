<template>
  <Layout :show-back-link="false" :toggle-view="showToggleView()">
    <div class="index-content">
      <TagCloud v-if="filter.length > 0" :event="removeTag()" :tags="filter" />
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
        <div
          v-for="(edge, index) in computeCards"
          :key="edge.node.id"
          class="cards"
        >
          <CardLayout
            class="card-layout"
            :painting="edge.node"
            :is-first-card="index === 0"
          />
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
        cover_image: image (width: 770, height: 380, blur: 10, quality: 85)
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
import {
  ADD_TAG,
  REMOVE_TAG,
  TOGGLE_FAVORITE,
  TOGGLE_VIEW
} from "~/components/js/Event.js";
import { DASHBOARD, FAVORITES } from "~/components/js/View.js";
import includes from "lodash/includes";
import { isClient } from "~/utils/client.js";

import CardLayout from "~/components/CardLayout.vue";
import TagCloud from "~/components/TagCloud.vue";
import {
  validateSiteUrl,
  validatePathPrefix,
  sanitizeUrl,
  sanitizeMetaContent
} from "~/utils/security.js";

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
      sanitizeMetaContent(
        this.$page.metadata?.siteName || "Gridsome Starter Wikidata"
      ) || "Gridsome Starter Wikidata";
    const siteDescription =
      sanitizeMetaContent(
        this.$page.metadata?.siteDescription ||
          "A Gridsome starter showcasing Wikidata integration"
      ) || "A Gridsome starter showcasing Wikidata integration";
    const siteUrl = validateSiteUrl(process.env.GRIDSOME_SITE_URL);
    const pathPrefix = validatePathPrefix(process.env.GRIDSOME_PATH_PREFIX);
    const url = `${siteUrl}${pathPrefix}/`;

    // Preload LCP image (first painting's cover image) for better Speed Index and LCP
    const linkTags = [];
    if (
      this.$page.paintings &&
      this.$page.paintings.edges &&
      this.$page.paintings.edges.length > 0
    ) {
      const firstPainting = this.$page.paintings.edges[0].node;
      // Validate and sanitize cover_image URL before preloading
      if (
        firstPainting.cover_image &&
        typeof firstPainting.cover_image === "string"
      ) {
        const sanitizedUrl = sanitizeUrl(firstPainting.cover_image);
        if (sanitizedUrl) {
          linkTags.push({
            rel: "preload",
            as: "image",
            href: sanitizedUrl
          });
        }
      }
    }
    // Preconnect to Wikidata for faster external link loading
    linkTags.push({
      rel: "preconnect",
      href: "https://www.wikidata.org",
      crossorigin: "anonymous"
    });

    return {
      title: siteName,
      link: linkTags,
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
  created() {
    // subscribe to event bus
    this.$eventBus.$on(ADD_TAG, this.onAddTag);
    this.$eventBus.$on(REMOVE_TAG, this.onRemoveTag);
    this.$eventBus.$on(TOGGLE_FAVORITE, this.onChangeFavorite);
    this.$eventBus.$on(TOGGLE_VIEW, this.onToggleView);
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
    // Initialize masonry layout - defer until after initial paint
    if (isClient()) {
      // Wait for initial paint before calculating masonry to reduce CLS
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.initMasonry();
        });
      });
    }
  },
  watch: {
    // Watch for changes in the cards array - ResizeObserver will handle resizing
    computeCards: {
      handler() {
        if (isClient()) {
          // Use requestAnimationFrame for better timing with DOM updates
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              // Trigger a resize after DOM update
              this.resizeAllCards();
            });
          });
        }
      },
      deep: false
    }
  },
  beforeDestroy() {
    // unsubscribe from all event bus listeners at once
    this.$eventBus.$off();
    // Disconnect ResizeObserver
    if (isClient() && this.masonryObserver) {
      this.masonryObserver.disconnect();
    }
    // Remove window resize listener
    if (isClient() && this.handleWindowResize) {
      window.removeEventListener("resize", this.handleWindowResize);
    }
    // Clear any pending resize timeouts
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  },
  computed: {
    /**
     * Computes the list of cards to display based on current view and filters
     * @returns {Array} Array of painting edges to display
     */
    computeCards() {
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
     * Initializes the masonry layout with ResizeObserver
     * Sets up automatic resizing when grid or cards change size
     */
    initMasonry() {
      if (!isClient()) return;

      const grid =
        this.$el?.querySelector(".masonry") ||
        document.querySelector(".masonry");
      if (!grid) return;

      // Optimized ResizeObserver - only observe grid container (not individual cards)
      // Individual card observations cause excessive recalculations
      this.masonryObserver = new ResizeObserver(entries => {
        // Only recalculate if grid size actually changed
        const entry = entries[0];
        if (entry && entry.contentRect) {
          // Debounce resize calls to avoid excessive calculations
          if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
          }
          this.resizeTimeout = setTimeout(() => {
            this.resizeAllCards();
          }, 150); // Increased debounce for better performance
        }
      });

      // Only observe the grid container (most efficient)
      this.masonryObserver.observe(grid);

      // Window resize listener as primary fallback (more efficient than observing index-content)
      this.handleWindowResize = () => {
        if (this.resizeTimeout) {
          clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(() => {
          this.resizeAllCards();
        }, 200); // Increased debounce for window resize
      };
      window.addEventListener("resize", this.handleWindowResize, {
        passive: true
      });

      // Initial resize after images load
      setTimeout(() => {
        this.waitForImagesAndResize();
      }, 200); // Increased delay to ensure initial paint is complete
    },
    /**
     * Waits for images to load, then resizes all cards
     * This ensures accurate height calculations during initial load
     */
    waitForImagesAndResize() {
      if (!isClient()) return;

      const allCards =
        this.$el?.getElementsByClassName("cards") ||
        document.getElementsByClassName("cards");
      if (!allCards || allCards.length === 0) {
        // Use requestAnimationFrame for better timing
        requestAnimationFrame(() => {
          this.resizeAllCards();
        });
        return;
      }

      // Find all images in cards (only check first few cards for faster initial render)
      const images = [];
      const cardsToCheck = Math.min(allCards.length, 6); // Only check first 6 cards for faster initial render
      Array.from(allCards)
        .slice(0, cardsToCheck)
        .forEach(card => {
          const img = card.querySelector("img");
          if (img && !img.complete) {
            images.push(img);
          }
        });

      // If all checked images are loaded, resize immediately
      if (images.length === 0) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.resizeAllCards();
          });
        });
        return;
      }

      // Wait for critical images to load, then resize
      let loadedCount = 0;
      const checkComplete = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          // Use requestAnimationFrame for better timing after images load
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.resizeAllCards();
            });
          });
        }
      };

      images.forEach(img => {
        if (img.complete) {
          checkComplete();
        } else {
          img.addEventListener("load", checkComplete, { once: true });
          img.addEventListener("error", checkComplete, { once: true });
          // Reduced timeout for faster fallback (3s instead of 5s)
          setTimeout(checkComplete, 3000);
        }
      });

      // Also resize after a delay for remaining cards (non-blocking)
      setTimeout(() => {
        this.resizeAllCards();
      }, 1000);
    },
    /**
     * Resizes all cards in the masonry grid
     * Optimized with batched DOM reads/writes to reduce layout thrashing
     */
    resizeAllCards() {
      if (!isClient()) return;

      const cards =
        this.$el?.querySelectorAll(".cards") ||
        document.querySelectorAll(".cards");
      if (cards.length === 0) return;

      const grid =
        this.$el?.querySelector(".masonry") ||
        document.querySelector(".masonry");
      if (!grid) return;

      // Batch DOM reads: Get all grid properties and card heights in one pass
      const computedStyle = window.getComputedStyle(grid);
      const gap = parseInt(computedStyle.gap || computedStyle.gridGap) || 0;
      const rowHeight = parseInt(computedStyle.gridAutoRows) || 10;

      // Phase 1: Read all heights (batch DOM reads)
      const cardHeights = [];
      cards.forEach(card => {
        const cardLayout = card.querySelector(".card-layout");
        if (cardLayout) {
          const height = cardLayout.offsetHeight;
          cardHeights.push(height > 0 ? height : 400); // Fallback to min-height if 0
        } else {
          cardHeights.push(400); // Fallback to min-height
        }
      });

      // Phase 2: Reset all cards (batch DOM writes)
      cards.forEach(card => {
        card.style.gridRowEnd = "auto";
      });

      // Force reflow between reset and apply
      void grid.offsetHeight;

      // Phase 3: Apply all spans (batch DOM writes)
      cards.forEach((card, index) => {
        const height = cardHeights[index];
        const span = Math.ceil((height + gap) / (rowHeight + gap));
        card.style.gridRowEnd = `span ${span}`;
      });
    }
  }
};
</script>

<style lang="scss">
.index-content {
  width: 100%;
  max-width: var(--grid-max-width);
  margin: 0 auto; // Perfect centering
  padding: var(--grid-padding-mobile) var(--grid-padding-mobile) 0;
  box-sizing: border-box;
  overflow-x: hidden; // Prevent horizontal overflow

  @media (min-width: 768px) {
    padding: var(--grid-padding-tablet) var(--grid-padding-tablet) 0;
  }

  @media (min-width: 1200px) {
    padding: var(--grid-padding-desktop) var(--grid-padding-desktop) 0;
  }
}

.masonry {
  display: grid;
  gap: var(--grid-gap);
  grid-auto-rows: 10px; // Base row height for masonry
  grid-template-columns: 1fr; // Single column on mobile
  width: 100%;
  max-width: 100%; // Prevent overflow
  margin: 0; // No margins - gap handles spacing
  padding: 0; // No padding - container handles it
  align-items: start;
  justify-items: stretch; // Cards fill grid cells
  box-sizing: border-box; // Include padding in width calculation

  // Tablet: 2 columns (768px+)
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Desktop: 3 columns (1200px+)
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  // Large desktop: 4 columns (1600px+)
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.cards {
  display: block;
  width: 100%;
  max-width: 100%; // Prevent overflow
  height: auto;
  margin: 0;
  padding: 0;
  min-height: 400px; // Reserve space to prevent layout shifts (CLS fix)
  overflow: hidden; // Prevent content from overflowing
  box-sizing: border-box; // Include padding in width calculation
  content-visibility: auto; // Improve rendering performance for offscreen cards
  contain-intrinsic-size: 400px; // Approximate height for content-visibility
  // Optimize for better CLS: prevent layout shifts during resize
  will-change: grid-row-end; // Hint to browser for optimization
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
