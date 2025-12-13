<template>
  <div class="action-bar">
    <div v-if="errorMessage" class="action-bar__error" role="alert">
      {{ errorMessage }}
    </div>
    <button
      class="action-button"
      :class="{ 'is-favorite': isFavorite }"
      :data-favorite="isFavorite"
      role="button"
      aria-label="Toggle favorite"
      @click.prevent="toggleFavorite(paintingItem)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <!-- https://material.io/resources/icons/?icon=favorite -->
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
    <g-link
      class="action-button"
      :to="getWikidataLink"
      aria-label="View on Wikidata"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <!-- https://material.io/resources/icons/?icon=link -->
        <path
          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
        />
      </svg>
    </g-link>
    <button
      class="action-button"
      role="button"
      aria-label="Download image"
      @click.prevent="download()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <!-- https://material.io/resources/icons/?icon=cloud_download -->
        <path
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
// Lazy load FileSaver - only needed when user clicks download
// This reduces initial bundle size since download is not critical for initial render

import { TOGGLE_FAVORITE } from "~/components/js/Event.js";
import { sanitizeUrl } from "~/utils/security.js";

// Error timeout matches CSS variable --error-timeout: 3000ms
const ERROR_TIMEOUT = 3000;

export default {
  props: {
    painting: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFavorite: false,
      errorMessage: null
    };
  },
  computed: {
    /**
     * Gets the Wikidata item ID from the painting's path
     * @returns {string} The Wikidata item ID (e.g., "Q12345")
     */
    paintingItem() {
      // Extract item from path (path format: /:item)
      return this.painting.path ? this.painting.path.replace(/^\//, "") : null;
    },
    /**
     * Gets the Wikidata URL for the current painting
     * @returns {string} The full Wikidata URL
     */
    getWikidataLink() {
      if (!this.paintingItem) {
        return "#";
      }
      // Sanitize item ID to prevent path traversal or injection
      const sanitizedItem = this.paintingItem.replace(/[^A-Z0-9]/gi, "");
      return "https://www.wikidata.org/wiki/" + sanitizedItem;
    }
  },
  methods: {
    /**
     * Toggles the favorite status of a painting
     * @param {string} item - The painting item ID
     */
    toggleFavorite(item) {
      this.isFavorite = !this.isFavorite;
      this.$eventBus.$emit(TOGGLE_FAVORITE, item);
    },
    /**
     * Downloads the painting image
     * Handles error cases and displays user-friendly error messages
     * Lazy loads FileSaver library only when needed
     */
    async download() {
      // Reset error message
      this.errorMessage = null;

      // In Gridsome, image is a string URL, not an object
      let imageUrl = this.painting.image || this.painting.cover_image;
      if (!imageUrl) {
        this.errorMessage = "Image not available for download";
        setTimeout(() => {
          this.errorMessage = null;
        }, ERROR_TIMEOUT);
        return;
      }
      // Handle both string URLs and image objects
      let uri =
        typeof imageUrl === "string" ? imageUrl : imageUrl.src || imageUrl;
      if (!uri) {
        this.errorMessage = "Invalid image URL. Unable to download.";
        setTimeout(() => {
          this.errorMessage = null;
        }, ERROR_TIMEOUT);
        return;
      }
      // Validate and sanitize URL before downloading
      const sanitizedUri = sanitizeUrl(uri);
      if (!sanitizedUri) {
        this.errorMessage = "Invalid image URL. Unable to download.";
        setTimeout(() => {
          this.errorMessage = null;
        }, ERROR_TIMEOUT);
        return;
      }
      try {
        // Lazy load FileSaver only when user clicks download
        // This reduces initial bundle size since download is not critical for initial render
        const FileSaver = (await import("file-saver")).default;
        
        // extract filename: take last element of relative URI and remove any URI params
        let filename = sanitizedUri.split("/").pop().split("?")[0];
        // remove any URI gibberish and sanitize filename
        filename = decodeURIComponent(filename).replace(/[^a-zA-Z0-9._-]/g, "_");
        // Ensure filename has extension or add default
        if (!filename.includes(".")) {
          filename += ".jpg";
        }
        FileSaver.saveAs(sanitizedUri, filename);
      } catch {
        this.errorMessage = "Failed to download image. Please try again.";
        setTimeout(() => {
          this.errorMessage = null;
        }, ERROR_TIMEOUT);
      }
    }
  }
};
</script>

<style lang="scss">
.action-bar {
  position: relative;

  &__error {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0.5em;
    padding: 0.5em 1em;
    background-color: var(--error-color);
    color: white;
    border-radius: 4px;
    font-size: 0.875rem;
    white-space: nowrap;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .action-button.is-favorite {
    fill: red;
  }

  :hover {
    opacity: 100%;
    transition: opacity 0.5s;
  }
}
</style>
