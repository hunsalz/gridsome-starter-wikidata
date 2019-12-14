<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <BackButton v-if="showBackButton" />
      </div>
      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <div class="main">
      <slot />
    </div>

    <footer class="footer">
      <span class="footer__copyright"
        >Copyright © {{ new Date().getFullYear() }}.</span
      >
      <span class="footer__links">
        Powered by
        <a href="//gridsome.org">Gridsome</a>
      </span>
    </footer>
  </div>
</template>

<script>
import BackButton from "~/components/BackButton.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showBackButton: { default: true }
  },
  components: {
    BackButton,
    ToggleTheme
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: var(--header-bg);
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;
  width: 100vw;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }
}

.main {
  margin-top: calc(var(--header-height) + 1em);
  margin-left: 1em;
  margin-right: 1em;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
