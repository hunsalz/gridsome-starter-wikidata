<template>
  <button
    role="button"
    aria-label="Toggle view"
    class="toggle-view"
    @click.prevent="toggleView"
  >
    <svg
      v-if="dashboard"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <!-- https://material.io/resources/icons/?icon=favorite -->
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <!-- https://material.io/resources/icons/?icon=dashboard -->
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </button>
</template>

<script>
import { TOGGLE_VIEW } from "~/components/js/Event.js";
import { DASHBOARD, FAVORITES } from "./js/View.js";

export default {
  data() {
    return {
      dashboard: false
    };
  },
  methods: {
    toggleView() {
      this.dashboard = !this.dashboard;
      this.$eventBus.$emit(TOGGLE_VIEW, this.dashboard ? FAVORITES : DASHBOARD);
    }
  }
};
</script>

<style lang="scss">
.toggle-view {
  background-color: transparent;
  fill: var(--header-color);
  border: 0;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    transition: opacity 0.5s;
  }

  :focus {
    outline: none;
  }
}
</style>
