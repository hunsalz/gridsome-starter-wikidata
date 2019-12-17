<template>
  <div class="card-layout content-box">
    <div class="card-layout__header">
      <g-image
        v-if="entry.cover_image"
        :src="entry.cover_image"
        alt="Cover image"
      />
    </div>
    <div class="card-layout__main">
      <h2 class="card-layout__title" v-html="entry.title" />
      <h3 class="card-layout__creator" v-html="entry.creator" />
      <h3 class="card-layout__location" v-html="entry.location" />
      <TagCloud class="card-layout__tags" :event="'addTag'" :tags="entry.depicts" />
    </div>
    <!--g-link class="card-layout__link" :to="entry.path" /-->
  </div>
</template>

<script>
import TagCloud from "~/components/TagCloud";

export default {
  components: {
    TagCloud
  },
  props: ["entry"]
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
