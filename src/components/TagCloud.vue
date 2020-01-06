<template>
  <div class="tag-filter">
    <button
      v-for="(tag, index) in tags"
      :key="index"
      role="button"
      aria-label="Tag"
      class="tag-filter__button"
      @click="emitEvent(tag)"
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
    emitEvent(tag) {
      this.$eventBus.$emit(this.event, tag);
    }
  }
};
</script>

<style lang="scss">
.tag-filter {
  margin: 1em 0 1em 0;

  &__button {
    margin: 0.2em;
    padding: 0.5em;
    font-size: 0.8em;
    font-weight: 400;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor;
    border-style: solid;
    border-radius: var(--radius);
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);
  }
}
</style>
