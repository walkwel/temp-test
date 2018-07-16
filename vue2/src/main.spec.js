import Vue from "vue";
import App from "./App.vue";

describe("Adder", () => {
  it("has a created hook", () => {
    expect(typeof App.created).toBe("function");
  });
  it("sets the correct default data", () => {
    expect(typeof App.data).toBe("function");
    const defaultData = App.data();
    expect(defaultData.message).toBe("Preparing Vue!");
  });

  // Inspect the component instance on mount
  it("correctly sets the message when created", () => {
    const vm = new Vue(App).$mount();
    expect(vm.message).toBe("Hello from Vue!");
  });

  // Mount an instance and inspect the render output
  it("renders the correct message", () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent).toBe("Hello from Vue!");
  });
});
