<template>
  <div class="tag-filter">
    <button
      v-for="(tag, index) in tags"
      :key="index"
      role="button"
      aria-label="Tag"
      class="action-button"
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

  :hover {
    opacity: 1;
    transition: opacity 0.5s;
  }

  :focus {
    outline: none;
  }
}
</style>
