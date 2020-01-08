<template>
  <button
    role="button"
    aria-label="Show favorites"
    class="show-favorites"
    :is-visible="isVisible"
    @click.prevent="showFavorites"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },
  created() {
    // subscribe to event bus
    this.$eventBus.$on(this.$eventBus.event.changeFavorite, this.onChangeFavorite);
  },
  beforeDestroy() {
    // unsubscribe from all event listeners at once
    this.$eventBus.$off();
  },
  methods: {
    onChangeFavorite() {
      this.isVisible = this.$favorites.length == 0 ? false : true;
    },
    showFavorites() {
      console.log("TODO");
      // TODO --wip--
    }
  }
};
</script>

<style lang="scss">
.show-favorites {
  background-color: transparent;
  fill: var(--header-color);
  border: 0;
  cursor: pointer;
  opacity: 0;
}

.show-favorites[is-visible="true"] {
  opacity: 1;

  :hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }

  :focus {
    outline: none;
  }
}
</style>
