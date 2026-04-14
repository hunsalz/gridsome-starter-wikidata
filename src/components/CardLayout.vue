<template>
  <div class="card-layout">
    <div class="card-layout__header">
      <g-image
        v-if="painting.cover_image && !imageLoadError"
        :src="painting.cover_image"
        :alt="
          painting.paintingLabel
            ? `${painting.paintingLabel} - Cover image`
            : 'Artwork cover image'
        "
        width="770"
        height="380"
        :fetchpriority="isFirstCard ? 'high' : 'auto'"
        :loading="isFirstCard ? 'eager' : 'lazy'"
        @error="onImageError"
      />
      <div v-if="!painting.cover_image || imageLoadError" class="card-layout__image-fallback">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <!-- Image icon placeholder -->
          <path
            d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
          />
        </svg>
        <p>Image unavailable</p>
      </div>
    </div>
    <div class="card-layout__content">
      <h2 class="card-layout__title">{{ painting.paintingLabel }}</h2>
      <div class="card-layout__meta">
        <div>Year: {{ painting.year }}</div>
        <div>Collection: {{ painting.locationLabel }}</div>
        <div>Material: {{ painting.materials }}</div>
      </div>
      <TagCloud class="card-layout__tags" :event="addTag()" :tags="getTags()" />
      <ActionBar class="card-layout__actions" :painting="painting" />
    </div>
    <g-link
      class="card-layout__link_to_painting"
      :to="painting.path"
      :aria-label="
        painting.paintingLabel
          ? `View details for ${painting.paintingLabel}`
          : 'View painting details'
      "
    />
  </div>
</template>

<script>
import TagCloud from "~/components/TagCloud.vue";
import { ADD_TAG } from "~/components/js/Event.js";

export default {
  components: {
    // Lazy load ActionBar for better code splitting
    ActionBar: () => import("~/components/ActionBar.vue"),
    TagCloud
  },
  props: {
    painting: {
      type: Object,
      required: true
    },
    isFirstCard: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imageLoadError: false
    };
  },
  methods: {
    /**
     * Handles image load errors by showing a fallback message
     */
    onImageError() {
      this.imageLoadError = true;
      console.warn(`Failed to load image for painting: ${this.painting.paintingLabel}`);
    },
    /**
     * Returns the ADD_TAG event constant for tag cloud
     * @returns {string} The ADD_TAG event constant
     */
    addTag() {
      return ADD_TAG;
    },
    /**
     * Gets the tags array for the painting
     * @returns {Array<string>} Array of tags, or empty array if no tags
     */
    getTags() {
      return this.painting.tags ? this.painting.tags : [];
    }
  }
};
</script>

<style lang="scss">
.card-layout {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%; // Prevent overflow
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: var(--card-border-radius);
  background-color: var(--bg-content-color);
  overflow: hidden; // Clip content to border-radius
  box-shadow: var(--card-shadow);
  transition: box-shadow 0.3s ease;
  box-sizing: border-box; // Include padding in width calculation

  &:hover {
    box-shadow: var(--card-shadow-hover);
  }

  &__header {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
    flex-shrink: 0; // Don't shrink image
    background-color: var(--bg-color);

    &:empty {
      display: none;
    }

    .g-image {
      width: 100%;
      height: auto;
      display: block;
      aspect-ratio: var(--card-image-aspect-ratio);
      object-fit: cover;
    }
  }

  &__image-fallback {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: var(--card-image-aspect-ratio);
    background-color: var(--bg-color);
    color: var(--body-color);
    gap: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;

    svg {
      opacity: 0.5;
      width: 48px;
      height: 48px;
      fill: var(--body-color);
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 0.875rem;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1; // Fill remaining space
    padding: var(--card-padding);
    gap: var(--text-spacing-md);
    position: relative;
    z-index: 1;

    // Mobile: reduced padding (650px and below)
    @media (max-width: 650px) {
      padding: var(--card-padding-mobile);
      gap: var(--text-spacing-sm);
    }
  }

  &__title {
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 600;
    color: var(--title-color);
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: var(--text-spacing-xs);
    font-size: 0.9rem;
    color: var(--body-color);
    line-height: 1.5;

    > div {
      margin: 0;
      padding: 0;
    }
  }

  &__tags {
    margin: 0;
    padding: 0;
    flex-shrink: 0; // Don't shrink tags
    position: relative;
    z-index: 2;
  }

  &__actions {
    margin: 0;
    padding: 0;
    margin-top: auto; // Push to bottom
    flex-shrink: 0;
    position: relative;
    z-index: 2;
  }

  &__link_to_painting {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
  }
}
</style>
