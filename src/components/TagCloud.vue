<template>
  <div class="tag-filter">
    <button
      v-for="(tag, index) in tags"
      :key="index"
      role="button"
      aria-label="Tag"
      class="tag-filter__button"
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
    transition: opacity 0.5s;
  }

  :focus {
    outline: none;
  }
}
</style>
