<template>
  <div class="tag-filter">
    <button
      v-for="(tag, index) in tags"
      :key="index"
      class="action-button"
      role="button"
      :aria-label="`Filter by ${tag}`"
      @click.prevent="emitEvent(tag)"
    >
      <span># {{ tag }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  methods: {
    /**
     * Emits an event to the event bus with the given tag
     * @param {string} tag - The tag to emit in the event
     */
    emitEvent(tag) {
      this.$eventBus.$emit(this.event, tag);
    }
  }
};
</script>

<style lang="scss">
.tag-filter {
  margin: 1em 0 1em 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em; // Use gap instead of margin for better spacing
  position: relative;
  z-index: 1;

  .action-button {
    flex-shrink: 0; // Prevent buttons from shrinking
    max-width: 100%; // Prevent overflow
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  :hover {
    opacity: 1;
    transition: opacity 0.5s;
  }

  :focus {
    outline: 2px solid var(--accent-color, #666600);
    outline-offset: 2px;
  }
}
</style>
