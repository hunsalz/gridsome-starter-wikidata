<template>
  <div class="tag-filter">
    <button
      class="tag-filter__button"
      v-for="(tag, index) in tags"
      :key="index"
      @click="emitEvent(tag)"
    >
      <span># {{ tag }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    event: String,
    tags: Array
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
    padding: 0.4em;
    font-size: 0.8em;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor !important;
    border-radius: var(--radius);
    white-space: nowrap;
  }
  button:hover {
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.2)
  }
}
</style>
