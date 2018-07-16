import Vue from "vue";
import App from "./main";

describe("Vue component tests", () => {
  it("should have function type", () => {
    expect(typeof App.add).toBe("function");
  });
  
  it("should return 5", () => {
    expect(App.add(2,3)).toBe(5);
  });

});
