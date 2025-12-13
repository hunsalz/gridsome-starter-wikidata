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
            class="painting__image"
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
import {
  validateSiteUrl,
  validatePathPrefix,
  sanitizeUrl,
  sanitizeMetaContent
} from "~/utils/security.js";

export default {
  metaInfo() {
    if (!this.$page.painting) {
      return {
        title: "Painting not found"
      };
    }

    const title =
      sanitizeMetaContent(
        this.$page.painting.paintingLabel || "Untitled Painting"
      ) || "Untitled Painting";
    const description = sanitizeMetaContent(
      `${title} by Leonardo da Vinci. ${this.$page.painting.year ? `Created in ${this.$page.painting.year}.` : ""} ${this.$page.painting.locationLabel ? `Collection: ${this.$page.painting.locationLabel}.` : ""}`
    );
    const image = sanitizeUrl(this.$page.painting.image || "") || "";
    const siteUrl = validateSiteUrl(process.env.GRIDSOME_SITE_URL);
    const pathPrefix = validatePathPrefix(process.env.GRIDSOME_PATH_PREFIX);
    // Validate painting path to prevent path traversal
    const paintingPath = (this.$page.painting.path || "").replace(/\.\./g, "");
    const url = `${siteUrl}${pathPrefix}${paintingPath}`;

    // Preload LCP image (painting detail image) for better LCP score
    const linkTags = [];
    if (image) {
      linkTags.push({
        rel: "preload",
        as: "image",
        href: image
      });
    }

    return {
      title: title,
      link: linkTags,
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
    padding: calc(var(--space) / 2) 1em calc(var(--space) / 2) 1em;
    text-align: center;
    margin: 0 auto; // Center header horizontally
    max-width: 100%; // Ensure it doesn't exceed container
  }

  &__content {
    margin: 0 auto; // Center content horizontally
    padding: 1em;
    max-width: 100%; // Ensure it doesn't exceed container

    &:empty {
      display: none;
    }

    .g-image {
      padding: 0;
      min-width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
    }

    &__image {
      aspect-ratio: 16 / 9;
      object-fit: contain;
    }
  }

  &__error {
    text-align: center;
    padding: 2em;
  }
}
</style>
