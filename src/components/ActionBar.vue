<template>
  <div class="action-bar">
    <button class="action-bar__button" @click="emitEvent(record.item)">
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
    <g-link class="action-bar__button" :to="computedWikidataLink">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
        />
      </svg>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    record: {
      type: Object,
      required: true
    },
    event: {
      type: String,
      required: true
    }
  },
  computed: {
    computedWikidataLink: function() {
      return "https://www.wikidata.org/wiki/" + this.record.item;
    }
  },
  methods: {
    emitEvent(item) {
      console.log(item);
      this.$eventBus.$emit(this.event, item);
    }
  }
};
</script>

<style lang="scss">
.action-bar {
  display: flex;
  margin: 1em 0 1em 0;

  &__button {
    display: flex;
    align-items: center;
    margin: 0.2em;
    padding: 0.5em;
    font-size: 0.8em;
    font-weight: 400;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor;
    fill: currentColor;
    border-radius: var(--radius);
    border-style: solid;
    border-width: 1px;
    border-color: currentColor;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
    opacity: 0.6;
    white-space: nowrap;
    cursor: pointer;
  }

  :hover {
    opacity: 1;
  }
}
</style>
