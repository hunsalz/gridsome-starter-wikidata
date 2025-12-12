<template>
  <div>
    <div v-if="hasError" class="error-boundary">
      <div class="error-boundary__content">
        <h1 class="error-boundary__title">Something went wrong</h1>
        <p class="error-boundary__message">
          {{
            errorMessage ||
            "An unexpected error occurred. Please try refreshing the page."
          }}
        </p>
        <div class="error-boundary__actions">
          <button
            class="error-boundary__button"
            role="button"
            aria-label="Reload page"
            @click="reload"
          >
            Reload Page
          </button>
          <button
            class="error-boundary__button error-boundary__button--secondary"
            role="button"
            aria-label="Go to home page"
            @click="goHome"
          >
            Go Home
          </button>
        </div>
        <details v-if="error && isDevelopment" class="error-boundary__details">
          <summary>Error Details (Development Only)</summary>
          <pre class="error-boundary__stack">{{ error.stack || error }}</pre>
        </details>
      </div>
    </div>
    <slot v-else />
  </div>
</template>

<script>
import { isDevelopment } from "~/utils/client.js";

export default {
  name: "ErrorBoundary",
  data() {
    return {
      hasError: false,
      error: null,
      errorMessage: null,
      isDevelopment: isDevelopment()
    };
  },
  errorCaptured(err, instance, info) {
    this.hasError = true;
    this.error = err;
    this.errorMessage = err.message || "An error occurred";

    // Log error for debugging (error boundaries should always log)
    if (isDevelopment()) {
      console.error("ErrorBoundary caught an error:", err, info);
    }

    // Prevent error from propagating
    return false;
  },
  methods: {
    /**
     * Reloads the current page
     */
    reload() {
      window.location.reload();
    },
    /**
     * Navigates to the home page
     */
    goHome() {
      this.$router.push("/");
    },
    /**
     * Resets the error state, clearing all error information
     */
    reset() {
      this.hasError = false;
      this.error = null;
      this.errorMessage = null;
    }
  }
};
</script>

<style lang="scss">
.error-boundary {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--empty-state-min-height);
  padding: var(--empty-state-padding) 1em;

  &__content {
    text-align: center;
    max-width: 600px;
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 1em;
    color: var(--error-color, #dc3545);
  }

  &__message {
    font-size: 1.125rem;
    color: var(--body-color);
    margin-bottom: 2em;
    line-height: 1.6;
  }

  &__actions {
    display: flex;
    gap: 1em;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__button {
    padding: 0.75em 1.5em;
    background-color: var(--link-color);
    color: white;
    border: none;
    border-radius: var(--radius);
    font-size: 1rem;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }

    &:focus {
      outline: 2px solid var(--link-color);
      outline-offset: 2px;
    }

    &--secondary {
      background-color: var(--bg-content-color);
      color: var(--body-color);
      border: 1px solid var(--border-color);
    }
  }

  &__details {
    margin-top: 2em;
    text-align: left;
    background-color: var(--bg-content-color);
    padding: 1em;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);

    summary {
      cursor: pointer;
      margin-bottom: 1em;
      color: var(--body-color);
      font-weight: 600;
    }
  }

  &__stack {
    font-size: 0.875rem;
    color: var(--body-color);
    white-space: pre-wrap;
    word-break: break-all;
    overflow-x: auto;
  }
}
</style>
