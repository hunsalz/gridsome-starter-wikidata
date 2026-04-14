import { mount } from "@vue/test-utils";
import ToggleView from "../ToggleView.vue";
import Vue from "vue";
import { FAVORITES } from "../js/View";

// Mock event bus
const mockEventBus = new Vue();
Vue.prototype.$eventBus = mockEventBus;

describe("ToggleView", () => {
  it("renders toggle view button with stub", () => {
    const wrapper = mount(ToggleView, {
      stubs: {
        svg: true
      }
    });
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("displays correct aria-label when on dashboard view", () => {
    const wrapper = mount(ToggleView, {
      stubs: {
        svg: true
      }
    });
    // Initial state: dashboard = false, so shows "Switch to dashboard view"
    expect(wrapper.find("button").attributes("aria-label")).toBe(
      "Switch to dashboard view"
    );
  });

  it("emits event when button is clicked", () => {
    const wrapper = mount(ToggleView, {
      stubs: {
        svg: true
      }
    });
    const emitSpy = jest.spyOn(wrapper.vm.$eventBus, "$emit");

    const button = wrapper.find("button");
    button.trigger("click");

    // Should emit an event with the new view type
    expect(emitSpy).toHaveBeenCalledWith("toggleView", FAVORITES);
    emitSpy.mockRestore();
  });
});
