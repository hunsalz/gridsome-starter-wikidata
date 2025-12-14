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
  display: flex;
  flex-wrap: wrap;
  gap: var(--tag-gap);
  margin: 0;
  margin-bottom: var(--text-spacing-md); // Add spacing below tag cloud
  padding: 0;
  width: 100%;
  position: relative;
  z-index: 1;

  .action-button {
    padding: var(--tag-padding);
    font-size: var(--tag-font-size);
    line-height: var(--tag-line-height);
    margin: 0;
    border-radius: var(--tag-border-radius);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    flex-shrink: 0; // Prevent buttons from shrinking
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
