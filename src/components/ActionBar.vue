<template>
  <div class="action-bar">
    <div class="action-bar__left">
      <button
        role="button"
        aria-label="Toggle favorite"
        class="action-bar__button"
        :is-favorite="isFavorite"
        @click.prevent="toggleFavorite(record.item)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <!-- https://material.io/resources/icons/?icon=favorite -->
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
      <g-link class="action-bar__button" :to="computedWikidataLink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <!-- https://material.io/resources/icons/?icon=link -->
          <path
            d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
          />
        </svg>
      </g-link>
    </div>
    <div class="action-bar__right">
      <button
        role="button"
        aria-label="Download image"
        class="action-bar__button"
        @click.prevent="download()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <!-- https://material.io/resources/icons/?icon=cloud_download -->
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import FileSaver from "file-saver";

import { TOGGLE_FAVORITE } from "~/components/js/Event.js";

export default {
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFavorite: false
    };
  },
  computed: {
    computedWikidataLink: function() {
      return "https://www.wikidata.org/wiki/" + this.record.item;
    }
  },
  methods: {
    toggleFavorite(item) {
      this.isFavorite = !this.isFavorite;
      this.$eventBus.$emit(TOGGLE_FAVORITE, item);
    },
    download: function() {
      let uri = this.record.image.src;
      // extract filename: take last element of relative URI and remove any URI params
      let filename = uri
        .split("/")
        .pop()
        .split("?")[0];
      // remove any URI gibberish
      filename = decodeURI(filename).replace(/%2C/g, ",");
      FileSaver.saveAs(uri, filename);
    }
  }
};
</script>

<style lang="scss">
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin: 4em 0 1em 0;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__button {
    display: flex;
    margin: 0.2em;
    padding: 0.5em;
    font-size: 0.8em;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor;
    fill: currentColor;
    border-radius: var(--radius);
    border-style: solid;
    border-width: 1px;
    border-color: currentColor;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
    opacity: 0.6;
    white-space: nowrap;
    cursor: pointer;
  }

  &__button[is-favorite="true"] {
    fill: red;
  }

  :hover {
    opacity: 1;
    transition: opacity 0.5s;
  }

  :focus {
    outline: none;
  }
}
</style>
