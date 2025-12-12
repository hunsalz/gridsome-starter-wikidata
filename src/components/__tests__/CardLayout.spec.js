import { mount, createLocalVue } from "@vue/test-utils";
import CardLayout from "../CardLayout.vue";

// Create local Vue instance with Gridsome components
const localVue = createLocalVue();

// Mock Gridsome components
localVue.component("g-image", {
  functional: true,
  props: ["src", "alt", "loading"],
  render(h, { props }) {
    return h("img", { attrs: { src: props.src, alt: props.alt } });
  }
});

localVue.component("g-link", {
  functional: true,
  props: ["to"],
  render(h, { props, slots }) {
    return h("a", { attrs: { href: props.to } }, slots().default);
  }
});

describe("CardLayout", () => {
  const mockPainting = {
    id: "1",
    title: "Test Painting",
    year: "1503",
    location: "Louvre",
    materials: "Oil on canvas",
    tags: ["1503", "Louvre", "portrait"],
    path: "/test-painting",
    cover_image: "https://example.com/cover.jpg"
  };

  it("renders painting information", () => {
    const wrapper = mount(CardLayout, {
      localVue,
      propsData: {
        painting: mockPainting
      },
      stubs: {
        TagCloud: true,
        ActionBar: true
      }
    });

    expect(wrapper.text()).toContain("Test Painting");
    expect(wrapper.text()).toContain("1503");
    expect(wrapper.text()).toContain("Louvre");
    expect(wrapper.text()).toContain("Oil on canvas");
  });

  it("renders cover image with dynamic alt text", () => {
    const wrapper = mount(CardLayout, {
      localVue,
      propsData: {
        painting: mockPainting
      },
      stubs: {
        TagCloud: true,
        ActionBar: true
      }
    });

    const image = wrapper.find("img");
    expect(image.exists()).toBe(true);
    expect(image.attributes("alt")).toContain("Test Painting");
  });

  it("handles missing cover image", () => {
    const wrapper = mount(CardLayout, {
      localVue,
      propsData: {
        painting: {
          ...mockPainting,
          cover_image: null
        }
      },
      stubs: {
        TagCloud: true,
        ActionBar: true
      }
    });

    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("returns empty array when painting has no tags", () => {
    const wrapper = mount(CardLayout, {
      localVue,
      propsData: {
        painting: {
          ...mockPainting,
          tags: null
        }
      },
      stubs: {
        TagCloud: true,
        ActionBar: true
      }
    });

    expect(wrapper.vm.getTags()).toEqual([]);
  });

  it("returns tags when painting has tags", () => {
    const wrapper = mount(CardLayout, {
      localVue,
      propsData: {
        painting: mockPainting
      },
      stubs: {
        TagCloud: true,
        ActionBar: true
      }
    });

    expect(wrapper.vm.getTags()).toEqual(["1503", "Louvre", "portrait"]);
  });
});
