import Vue from "vue";
import App from "./main";

describe("Adder", () => {
  it("has a created hook", () => {
    expect(typeof App.add).toBe("function");
  });
  it("should return 5", () => {
    expect(typeof App.add(2,3)).toBe(5);
  });

});
