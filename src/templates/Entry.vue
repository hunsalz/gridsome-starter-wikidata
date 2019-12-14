<template>
  <Layout class="entry">
    <div class="entry__title">
      <h1 class="entry__title__text">{{ $page.entry.title }}</h1>
    </div>
    <div class="content-box">
      <div class="entry__header">
        <g-image
          v-if="$page.entry.cover_image"
          :src="$page.entry.cover_image"
          alt="Cover image"
        />
      </div>
      <div class="entry__main">>
        <div class="entry__content" v-html="$page.entry.content" />
        <TagCloud class="entry__tags" :entry="$page.entry" />
      </div>
    </div>
  </Layout>
</template>

<script>
import TagCloud from "~/components/TagCloud";

export default {
  components: {
    TagCloud
  },
  metaInfo() {
    return {
      title: this.$page.entry.title,
      meta: [
        {
          name: "description",
          content: this.$page.entry.content
        }
      ]
    };
  }
};
</script>

<page-query>
query Entry ($id: ID!) {
  entry: entry (id: $id) {
    title
    path
    cover_image (width: 860, blur: 10)
    tags
    data {
      title
      labels
      values
      unit
      type
    }
    content
  }
}
</page-query>

<style lang="scss">
.entry {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
    text-align: center;
  }
}

.entry {
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
