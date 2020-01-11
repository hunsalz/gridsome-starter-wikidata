<template>
  <Layout :show-back-link="true" :toggle-view="false">
    <div class="content-box">
      <h1 class="record__header">{{ $page.record.painting }}</h1>
      <div class="record__content">
        <g-image
          v-if="$page.record.image"
          :src="$page.record.image"
          alt="Painting"
        />
        <div>Year: {{ $page.record.year }}</div>
        <div>Collection: {{ $page.record.location }}</div>
        <div>Material: {{ $page.record.materials.join(", ") }}</div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.record.painting,
      meta: [
        {
          name: "description",
          content: this.$page.record.painting
        }
      ]
    };
  }
};
</script>

<page-query>
query record ($id: ID!) {
  record: record (id: $id) {
    id
    path
    item
    painting
    image
    year (format: "YYYY")
  	location
    materials
    depicts
  }
}
</page-query>

<style lang="scss">
.record {
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
