<template>
  <Layout :show-back-link="true" :toggle-view="false">
    <div class="content-box">
      <div v-if="!$page.painting" class="painting__error">
        <h1>Painting not found</h1>
        <p>
          The painting you're looking for could not be found. Please check the
          URL or return to the home page.
        </p>
      </div>
      <div v-else>
        <h1 class="painting__header">
          {{ $page.painting.paintingLabel || "Untitled" }}
        </h1>
        <div class="painting__content">
          <g-image
            v-if="$page.painting.image"
            :src="$page.painting.image"
            :alt="
              $page.painting.paintingLabel
                ? `${$page.painting.paintingLabel} by Leonardo da Vinci`
                : 'Painting by Leonardo da Vinci'
            "
            loading="lazy"
          />
          <div v-if="$page.painting.year">Year: {{ $page.painting.year }}</div>
          <div v-if="$page.painting.locationLabel">
            Collection: {{ $page.painting.locationLabel }}
          </div>
          <div v-if="$page.painting.materials">
            Material: {{ $page.painting.materials }}
          </div>
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

    const title = this.$page.painting.paintingLabel || "Untitled Painting";
    const description = `${title} by Leonardo da Vinci. ${this.$page.painting.year ? `Created in ${this.$page.painting.year}.` : ""} ${this.$page.painting.locationLabel ? `Collection: ${this.$page.painting.locationLabel}.` : ""}`;
    const image = this.$page.painting.image || "";
    const siteUrl =
      process.env.GRIDSOME_SITE_URL || "https://hunsalz.github.io";
    const pathPrefix =
      process.env.GRIDSOME_PATH_PREFIX || "/gridsome-starter-wikidata";
    const url = `${siteUrl}${pathPrefix}${this.$page.painting.path}`;

    return {
      title: title,
      meta: [
        {
          name: "description",
          content: description.trim()
        },
        // Open Graph meta tags
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: description.trim()
        },
        {
          property: "og:image",
          content: image
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: url
        },
        // Twitter Card meta tags
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: description.trim()
        },
        {
          name: "twitter:image",
          content: image
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
    paintingLabel
    image
    year: date (format: "YYYY")
    locationLabel
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
