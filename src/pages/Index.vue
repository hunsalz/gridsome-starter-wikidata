<template>
  <Layout :show-back-link="false" :toggle-view="showToggleView()">
    <div>
      <TagCloud :event="__getRemoveTag()" :tags="filter" />
      <div class="grid">
        <div v-for="edge in computedCards" :key="edge.node.id">
          <CardLayout :record="edge.node" />
        </div>
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
        image
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
import {
  ADD_TAG,
  REMOVE_TAG,
  TOGGLE_FAVORITE,
  TOGGLE_VIEW
} from "~/components/js/Event.js";
import { DASHBOARD, FAVORITES } from "~/components/js/View.js";

export default {
  components: {
    CardLayout,
    TagCloud
  },
  data: function() {
    return {
      view: DASHBOARD,
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
  created() {
    // subscribe to event bus
    this.$eventBus.$on(ADD_TAG, this.onAddTag);
    this.$eventBus.$on(REMOVE_TAG, this.onRemoveTag);
    this.$eventBus.$on(TOGGLE_FAVORITE, this.onChangeFavorite);
    this.$eventBus.$on(TOGGLE_VIEW, this.onToggleView);
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
  computed: {
    computedCards: function() {
      // view
      if (this.view === FAVORITES && this.favorites.length > 0) {
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
      // remove item if in place
      let index = _.indexOf(this.favorites, item);
      if (index != -1) {
        this.favorites.splice(index, 1);
        // force dashboard view when last item is removed
        if (this.favorites.length === 0) {
          this.view = DASHBOARD;
        }
        // add if not in place
      } else {
        this.favorites.push(item);
      }
    },
    // set view setting
    onToggleView: function(view) {
      this.view = view;
    },
    // decide if toggle is visible
    showToggleView: function() {
      return this.favorites.length > 0 ? true : false;
    },
    __getRemoveTag: function() {
      return REMOVE_TAG;
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
