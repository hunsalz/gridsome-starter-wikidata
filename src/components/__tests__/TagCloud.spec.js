import { mount } from "@vue/test-utils";
import TagCloud from "../TagCloud.vue";
import Vue from "vue";
import { ADD_TAG } from "../js/Event";

// Mock event bus
const mockEventBus = new Vue();
Vue.prototype.$eventBus = mockEventBus;

describe("TagCloud", () => {
  const mockTags = ["painting", "portrait", "oil", "renaissance"];

  it("renders all tags as buttons", () => {
    const wrapper = mount(TagCloud, {
      propsData: {
        event: ADD_TAG,
        tags: mockTags
      }
    });

    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(mockTags.length);
  });

  it("displays tag text correctly", () => {
    const wrapper = mount(TagCloud, {
      propsData: {
        event: ADD_TAG,
        tags: mockTags
      }
    });

    mockTags.forEach((tag, index) => {
      expect(wrapper.findAll("button").at(index).text()).toContain(tag);
    });
  });

  it("emits event with correct tag on button click", () => {
    const wrapper = mount(TagCloud, {
      propsData: {
        event: ADD_TAG,
        tags: mockTags
      }
    });

    const emitSpy = jest.spyOn(wrapper.vm.$eventBus, "$emit");
    const firstButton = wrapper.findAll("button").at(0);

    firstButton.trigger("click");

    expect(emitSpy).toHaveBeenCalledWith(ADD_TAG, mockTags[0]);
    emitSpy.mockRestore();
  });

  it("has proper aria-label for accessibility", () => {
    const wrapper = mount(TagCloud, {
      propsData: {
        event: ADD_TAG,
        tags: mockTags
      }
    });

    const buttons = wrapper.findAll("button");
    buttons.wrappers.forEach((button, index) => {
      expect(button.attributes("aria-label")).toContain(mockTags[index]);
    });
  });
});
