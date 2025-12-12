<template>
  <Layout :show-back-link="true" :toggle-view="false">
    <div class="content-box">
      <div v-if="!$page.painting" class="painting__error">
        <h1>Painting not found</h1>
        <p>The painting you're looking for could not be found.</p>
      </div>
      <div v-else>
        <h1 class="painting__header">{{ $page.painting.title || "Untitled" }}</h1>
        <div class="painting__content">
          <g-image
            v-if="$page.painting.image"
            :src="$page.painting.image"
            alt="Painting"
          />
          <div v-if="$page.painting.year">Year: {{ $page.painting.year }}</div>
          <div v-if="$page.painting.location">Collection: {{ $page.painting.location }}</div>
          <div v-if="$page.painting.materials">Material: {{ $page.painting.materials }}</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    if (!this.$page.painting) {
      return {
        title: "Painting not found"
      };
    }
    return {
      title: this.$page.painting.title || "Untitled Painting",
      meta: [
        {
          name: "description",
          content: this.$page.painting.title || "Painting details"
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

  &__error {
    text-align: center;
    padding: 2em;
  }
}
</style>
