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
  display:flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  color: var(--header-color);
  font-size: 1em;
}
</style>
