<template>
  <div class="card-layout content-box">
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
      <!-- <g-link class="card-layout__link2" :to="'https://www.wikidata.org/wiki/'record.item">Source</g-link> -->
      <TagCloud
        class="card-layout__tags"
        :event="'addTag'"
        :tags="record.depicts"
      />
    </div>
    <g-link class="card-layout__link" :to="record.path" />
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
  }
};
</script>

<style lang="scss">
.card-layout {
  position: relative;

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
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 0;
  }
}
</style>
