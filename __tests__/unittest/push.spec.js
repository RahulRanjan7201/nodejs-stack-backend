const Stack = require("../../src/models/stack");
global.stackSize = 2;
describe("Stack Push Operation", () => {
  beforeEach(() => {
    global.stack = [];
  });
  it("should push value in stack ", () => {
    const result = Stack.pushStack(25);
    expect(result.length).toEqual(1);
    expect(result).toContain(25);
  });
  it("should throw error if stack over flow. size setting to 2 ", () => {
    let value = [25, 26, 27];
    try {
    for (let ele of value) {
        Stack.pushStack(ele);
    }
   } catch (err) {
      expect(err.message).toBe(
        "Stack Overflow. Please remove the value from Stack to push"
      );
    }
  });
});
