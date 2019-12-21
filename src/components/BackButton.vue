<template>
  <g-link class="back-button" to="/">
    <span class="back-button__text"
      >&larr; {{ $static.metadata.siteName }}</span
    >
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.back-button {
  text-decoration: none;
  color: var(--header-color) !important;
  font-size: 1em;
}
</style>
