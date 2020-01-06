<template>
  <div class="card-layout content-box">
    <!--div class="card-layout__favorite">LIKE</div-->

    <button
      role="button"
      aria-label="Toggle favorite"
      class="card-layout__favorite"
      @click.prevent="toggleTheme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-sun"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>

    <div class="card-layout__header">
      <g-image
        v-if="record.cover_image"
        :src="record.cover_image"
        alt="Cover image"
      />
    </div>
    <div class="card-layout__main">
      <h2 class="card-layout__title">{{ record.painting }}</h2>
      <div>Year: {{ record.year }}</div>
      <div>Collection: {{ record.location }}</div>
      <div>Material: {{ record.materials.join(", ") }}</div>
      <g-link class="card-layout__link" :to="computedWikidataLink">
        Visit Wikidata
      </g-link>
      <TagCloud
        class="card-layout__tags"
        :event="'addTag'"
        :tags="record.tags"
      />
    </div>
    <g-link class="card-layout__link_to_record" :to="record.path" />
  </div>
</template>

<script>
import TagCloud from "~/components/TagCloud";

export default {
  components: {
    TagCloud
  },
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  computed: {
    computedWikidataLink: function() {
      return "https://www.wikidata.org/wiki/" + this.record.item;
    }
  }
};
</script>

<style lang="scss">
.card-layout {
  position: relative;

  &__favorite {
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    z-index: 1;
    margin: 0.2em;
    padding: 0.4em;
    background-color: var(--bg-color);
    color: currentColor !important;
    border: 0;
    border-radius: var(--radius);
    white-space: nowrap;
    opacity: 0;
  }

  &__header {
    border-radius: var(--radius) var(--radius) 0 0;
    overflow: hidden;

    &:empty {
      display: none;
    }

    .g-image {
      min-width: 100%;
    }
  }

  &__main {
    margin: 1em;
    padding: 1em;
  }

  &__title {
    margin-top: 0;
  }

  &__tags {
    position: relative;
    z-index: 1;
  }

  &__link {
    position: relative;
    z-index: 1;
    color: currentColor !important;
  }

  &__link_to_record {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 0;
  }
}

.card-layout:hover {
  .card-layout__favorite {
    // &__favorite {} doesn't work
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    opacity: 1;
  }
}
</style>
