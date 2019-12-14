<template>
  <Layout :show-back-button="false">
    <TagCloud :event="'removeTag'" :tags="selectedTags" />
    <div class="grid">
      <div v-for="edge in computedCards" :key="edge.node.id">
        <CardLayout :entry="edge.node" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  entries: allEntry(filter: { visible: { eq: true }}, sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
        cover_image (width: 770, height: 380, blur: 10)
        tags
        data {
          title
          labels
          values
          unit
          type
          color
        }
        content
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
      selectedTags: []
    };
  },
  metaInfo: {
    title: "Overview page",
    titleTemplate: "%s"
  },
  computed: {
    computedCards: function() {
      let edges = this.$page.entries.edges;

      //console.log("edges", edges);

      // filter matching cards
      let result = edges.filter(
        edge =>
          // compose intersection between tags per node and given filter array.
          _.intersection(edge.node.tags, this.selectedTags).length ===
          // force exact match of all filtered tag elements
          this.selectedTags.length
      );

      //console.log("Result: ", result);

      return result;
    }
  },
  methods: {
    // TODO explain
    onAddTag: function(tag) {
      //console.log("add", tag);
      this.selectedTags = _.union(this.selectedTags, [tag]);
    },
    // TODO explain
    onRemoveTag: function(tag) {
      //console.log("remove", tag);
      this.selectedTags = _.without(this.selectedTags, tag);
    }
  },
  created() {
    this.$eventBus.$on("addTag", this.onAddTag);
    this.$eventBus.$on("removeTag", this.onRemoveTag);
  },
  beforeDestroy() {
    this.$eventBus.$off("addTag");
    this.$eventBus.$off("removeTag");
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
