<template>
  <div class="card-layout content-box">
    <div class="card-layout__header">
      <g-image
        v-if="record.cover_image"
        :src="record.cover_image"
        alt="Cover image"
      />
    </div>
    <div class="card-layout__content">
      <h2 class="card-layout__title">{{ record.painting }}</h2>
      <div>Year: {{ record.year }}</div>
      <div>Collection: {{ record.location }}</div>
      <div>Material: {{ record.materials.join(", ") }}</div>
      <TagCloud
        class="card-layout__tags"
        :event="__getAddTag()"
        :tags="record.tags"
      />
      <ActionBar class="card-layout__actions" :record="record" />
    </div>
    <g-link class="card-layout__link_to_record" :to="record.path" />
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
    record: {
      type: Object,
      required: true
    }
  },
  computed: {
    computedWikidataLink: function() {
      return "https://www.wikidata.org/wiki/" + this.record.item;
    }
  },
  methods: {
    __getAddTag: function() {
      return ADD_TAG;
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

  &__content {
    margin: 1em;
    padding: 1em;
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
</style>
