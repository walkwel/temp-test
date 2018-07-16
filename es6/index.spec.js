let greetings = require("./index");

describe("Calculation 1", () => {
  it("knows that add(2,3) return 4", () => {
    expect(greetings.add(2,3)).toBe(5);
  });
  it("knows that subtract(2,3) return -1", () => {
    expect(greetings.subtract(2,3)).toBe(-1);
  });
});
describe("Calculation 2", () => {
  it("knows that multiple(2,3) return 4", () => {
    expect(greetings.multiple(2,3)).toBe(6);
  });
  it("knows that divide(6,3) return 2", () => {
    expect(greetings.divide(6,3)).toBe(2);
  });
});
