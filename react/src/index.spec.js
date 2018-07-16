let greetings = require("./index");

describe("Greeting", () => {
  it("knows that hello returns HELLO", () => {
    expect(greetings.hello()).toBe("HELLO");
  });
  it("knows that hello returns Hi", () => {
    expect(greetings.hello()).toBe("Hi");
  });
});
