<template>
  <Layout :show-back-link="true" :toggle-view="false">
    <div class="content-box">
      <h1 class="painting__header">{{ $page.painting.title }}</h1>
      <div class="painting__content">
        <g-image
          v-if="$page.painting.image"
          :src="$page.painting.image"
          alt="Painting"
        />
        <div>Year: {{ $page.painting.year }}</div>
        <div>Collection: {{ $page.painting.location }}</div>
        <div>Material: {{ $page.painting.materials }}</div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.painting.title,
      meta: [
        {
          name: "description",
          content: this.$page.painting.title
        }
      ]
    };
  }
};
</script>

<page-query>
query painting ($id: ID!) {
  painting: painting (id: $id) {
    id
    path
    title: paintingLabel
    image
    year: date (format: "YYYY")
  	location: locationLabel
    materials
    depicts
  }
}
</page-query>

<style lang="scss">
.painting {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2) 0;
    text-align: center;
  }

  &__content {
    margin: 0 1em 1em 1em;
    padding: 0 1em 1em 1em;

    &:empty {
      display: none;
    }

    .g-image {
      padding: 0;
      min-width: 100%;
    }
  }
}
</style>
