<template>
  <Layout :show-back-link="false" :toggle-view="showToggleView()">
    <TagCloud :event="this.$eventBus.event.removeTag" :tags="filter" />
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
      view: "dashboard",
      filter: [],
      favorites: []
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
      console.log("computedCards");

      if (this.view === "favorites" && this.favorites.length > 0) {

        // filter matching cards
        return this.$page.records.edges.filter(
          edge => _.indexOf(this.favorites, edge.node.item) > -1
        );

      } else {
        // filter matching cards
        return this.$page.records.edges.filter(
          edge =>
            // compose intersection between tags per node and given filter
            _.intersection(edge.node.tags, this.filter).length ===
            this.filter.length // force exact match of all filter elements
        );
      }
    }
  },
  created() {
    // subscribe to event bus
    this.$eventBus.$on(this.$eventBus.event.addTag, this.onAddTag);
    this.$eventBus.$on(this.$eventBus.event.removeTag, this.onRemoveTag);
    this.$eventBus.$on(
      this.$eventBus.event.changeFavorite,
      this.onChangeFavorite
    );
    this.$eventBus.$on(this.$eventBus.event.toggleView, this.onToggleView);
    // create tag cloud
    this.$page.records.edges.forEach(edge => {
      // ... of unique values
      edge.node.tags = _.union(
        [edge.node.year, edge.node.location],
        edge.node.depicts
      );
      // ... remove any empty value
      _.remove(edge.node.tags, function(tag) {
        return tag.length === 0 ? true : false;
      });
    });
  },
  beforeDestroy() {
    // unsubscribe from all event listeners at once
    this.$eventBus.$off();
  },
  methods: {
    // add a new tag to existing tag filter
    onAddTag: function(tag) {
      this.filter = _.union(this.filter, [tag]);
    },
    // remove a tag from existing tag filter
    onRemoveTag: function(tag) {
      this.filter = _.without(this.filter, tag);
    },
    // control list of favorites
    onChangeFavorite: function(item) {
      let index = _.indexOf(this.favorites, item);
      if (index != -1) {
        this.favorites.splice(index, 1);
        if (this.favorites.length === 0) {
          this.view = "dashboard";
        }
      } else {
        this.favorites.push(item);
      }
    },
    //
    onToggleView: function(view) {
      this.view = view;
      console.log(this.view, view);
    },
    showToggleView: function() {
      return this.favorites.length > 0 ? true : false;
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
