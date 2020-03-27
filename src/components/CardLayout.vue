<template>
  <div class="card-layout">
    <div class="card-layout__header">
      <g-image
        v-if="painting.cover_image"
        :src="painting.cover_image"
        alt="Cover image"
      />
    </div>
    <div class="card-layout__content">
      <h2 class="card-layout__title">{{ painting.title }}</h2>
      <div>Year: {{ painting.year }}</div>
      <div>Collection: {{ painting.location }}</div>
      <div>Material: {{ painting.materials }}</div>
      <TagCloud class="card-layout__tags" :event="addTag()" :tags="getTags()" />
      <ActionBar class="card-layout__actions" :painting="painting" />
    </div>
    <g-link class="card-layout__link_to_painting" :to="painting.path" />
  </div>
</template>

<script>
import ActionBar from "~/components/ActionBar";
import TagCloud from "~/components/TagCloud";
import { ADD_TAG } from "~/components/js/Event.js";

export default {
  components: {
    ActionBar,
    TagCloud
  },
  props: {
    painting: {
      type: Object,
      required: true
    }
  },
  methods: {
    addTag: function () {
      return ADD_TAG;
    },
    getTags() {
      return this.painting.tags ? this.painting.tags : [];
    }
  }
};
</script>

<style lang="scss">
.card-layout {
  position: relative;
  margin: 0 0 1em 0;
  border-radius: var(--radius) var(--radius) 0 0;
  background-color: var(--bg-content-color);

  &__header {
    border-radius: var(--radius) var(--radius) 0 0;
    overflow: hidden;

    &:empty {
      display: none;
    }

    .g-image {
      width: 100%;
      height: auto;
      height: 20vh;
      object-fit: cover;
    }
  }

  &__content {
    padding: 3em;
  }

  &__title {
    margin-top: 0;
  }

  &__actions {
    position: relative;
    z-index: 1;
  }

  &__tags {
    position: relative;
    z-index: 1;
  }

  &__link_to_painting {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0%;
    z-index: 0;
  }
}
</style>
