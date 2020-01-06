<template>
  <g-link class="back-link" to="/">
    <span class="back-link__text">&larr; {{ $static.metadata.siteName }}</span>
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
.back-link {
  text-decoration: none;
  color: var(--header-color) !important;
  font-size: 1em;
}
</style>
