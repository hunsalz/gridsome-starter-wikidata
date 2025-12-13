import { mount } from "@vue/test-utils";
import ActionBar from "../ActionBar.vue";
import Vue from "vue";

// Mock Gridsome's g-link component globally
Vue.component("g-link", { template: "<a><slot /></a>" });
// Mock the global event bus
Vue.prototype.$eventBus = new Vue();

describe("ActionBar", () => {
  const mockPainting = {
    path: "/Q12345",
    paintingLabel: "Test Painting",
    image: "https://example.com/image.jpg",
    cover_image: "https://example.com/cover.jpg"
  };

  it("renders all action buttons", () => {
    const wrapper = mount(ActionBar, {
      propsData: {
        painting: mockPainting
      }
    });

    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(2); // Favorite and download buttons
    // g-link component exists (may be stubbed)
    expect(wrapper.html()).toContain("g-link"); // Wikidata link
  });

  it("gets correct Wikidata link", () => {
    const wrapper = mount(ActionBar, {
      propsData: {
        painting: mockPainting
      }
    });

    expect(wrapper.vm.getWikidataLink).toBe(
      "https://www.wikidata.org/wiki/Q12345"
    );
  });

  it("toggles favorite state", () => {
    const wrapper = mount(ActionBar, {
      propsData: {
        painting: mockPainting
      }
    });

    expect(wrapper.vm.isFavorite).toBe(false);

    const favoriteButton = wrapper.findAll("button").at(0);
    favoriteButton.trigger("click");

    expect(wrapper.vm.isFavorite).toBe(true);
  });

  it("shows error message when image is not available", async () => {
    const wrapper = mount(ActionBar, {
      propsData: {
        painting: {
          ...mockPainting,
          image: null,
          cover_image: null
        }
      }
    });

    const downloadButton = wrapper.findAll("button").at(1);
    downloadButton.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.errorMessage).toBe("Image not available for download");
    expect(wrapper.find(".action-bar__error").exists()).toBe(true);
  });

  it("has proper accessibility attributes", () => {
    const wrapper = mount(ActionBar, {
      propsData: {
        painting: mockPainting
      }
    });

    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBeGreaterThan(0);
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons.at(i);
      expect(button.attributes("aria-label")).toBeTruthy();
      expect(button.attributes("role")).toBe("button");
    }
  });
});
