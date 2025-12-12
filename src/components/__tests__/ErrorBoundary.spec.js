import { mount } from "@vue/test-utils";
import ErrorBoundary from "../ErrorBoundary.vue";

describe("ErrorBoundary", () => {
  it("renders slot content when no error", () => {
    const wrapper = mount(ErrorBoundary, {
      slots: {
        default: "<div>Test Content</div>"
      }
    });

    expect(wrapper.html()).toContain("Test Content");
    expect(wrapper.find(".error-boundary").exists()).toBe(false);
  });

  it("shows error message when error occurs", () => {
    const wrapper = mount(ErrorBoundary, {
      data() {
        return {
          hasError: true,
          error: new Error("Test error"),
          errorMessage: "Test error message"
        };
      },
      slots: {
        default: "<div>Test Content</div>"
      }
    });

    expect(wrapper.find(".error-boundary").exists()).toBe(true);
    expect(wrapper.text()).toContain("Something went wrong");
    expect(wrapper.text()).toContain("Test error message");
  });

  it("has reload and go home buttons", () => {
    const wrapper = mount(ErrorBoundary, {
      data() {
        return {
          hasError: true,
          error: new Error("Test error"),
          errorMessage: "Test error"
        };
      }
    });

    const buttons = wrapper.findAll(".error-boundary__button");
    expect(buttons.length).toBe(2);
    expect(buttons.at(0).text()).toBe("Reload Page");
    expect(buttons.at(1).text()).toBe("Go Home");
  });
});
