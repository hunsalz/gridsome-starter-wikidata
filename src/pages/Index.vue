<template>
  <Layout :show-back-link="false">
    <TagCloud :event="'removeTag'" :tags="tagFilter" />
    <div class="grid">
      <div v-for="edge in computedCards" :key="edge.node.id">
        <CardLayout :record="edge.node" />
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
  records: allRecord(sortBy: "date", order: ASC) {
    edges {
      node {
        id
        path
        item
        painting
        cover_image (width: 770, height: 380, blur: 10)
        year (format: "YYYY")
  			location
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

export default {
  components: {
    CardLayout,
    TagCloud
  },
  data: function() {
    return {
      tagFilter: []
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
  computed: {
    computedCards: function() {
      // filter matching cards
      return this.$page.records.edges.filter(
        edge =>
          // compose intersection between tags per node and given tag filter
          _.intersection(edge.node.tags, this.tagFilter).length ===
          // force exact match of all filtered tag elements
          this.tagFilter.length
      );
    }
  },
  created() {
    // subscribe to event bus
    this.$eventBus.$on("addTag", this.onAddTag);
    this.$eventBus.$on("removeTag", this.onRemoveTag);
    // create tag cloud
    this.$page.records.edges.forEach(edge => {
      // ... of unique values
      edge.node.tags = _.union([edge.node.year], edge.node.depicts);
      // ... remove any empty value
      _.remove(edge.node.tags, function(tag) {
        return tag.length === 0 ? true : false;
      });
    });
  },
  beforeDestroy() {
    // unsubscribe from event bus
    this.$eventBus.$off("addTag");
    this.$eventBus.$off("removeTag");
  },
  methods: {
    // add a new tag to existing tag filter
    onAddTag: function(tag) {
      this.tagFilter = _.union(this.tagFilter, [tag]);
    },
    // remove a tag from existing tag filter
    onRemoveTag: function(tag) {
      this.tagFilter = _.without(this.tagFilter, tag);
    }
  }
};
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
