<template>
  <Layout class="record">
    <div class="record__title">
      <h1 class="record__title__text">{{ $page.record.painting }}</h1>
    </div>
    <div class="content-box">
      <div class="record__header">
        <g-image
          v-if="$page.record.image"
          :src="$page.record.image"
          alt="Painting"
        />
      </div>
      <div class="record__main">
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
      title: this.$page.record.title,
      meta: [
        {
          name: "description",
          content: this.$page.record.content
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

  &__title {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
    text-align: center;
  }
}

.record {
  &__header {
    border-radius: var(--radius) var(--radius) 0 0;
    overflow: hidden;

    &:empty {
      display: none;
    }

    .g-image {
      min-width: 100%;
    }
  }

  &__main {
    margin: 1em;
    padding: 1em;
  }

  &__content {
    margin-top: 1em;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }
}
</style>
