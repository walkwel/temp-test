let greetings = require("./index");

describe("Calculation 1", () => {
  it("knows that add(10,30) return 40", () => {
    expect(greetings.add(10,30)).toBe(40);
  });
  it("knows that subtract(90,30) return 60", () => {
    expect(greetings.subtract(90,30)).toBe(60);
  });
});
describe("Calculation 2", () => {
  it("knows that multiple(20,30) return 600", () => {
    expect(greetings.multiple(20,30)).toBe(600);
  });
  it("knows that divide(600,30) return 20", () => {
    expect(greetings.divide(600,30)).toBe(20);
  });
});
