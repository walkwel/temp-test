let greetings = require("./index");

describe("Greeting", () => {
  it("knows that hello returns HELLO", () => {
    //expect(greetings.hello()).toBe("HELLO");
    expect(greetings.hello()).toBe("HELLO");
  });
});
