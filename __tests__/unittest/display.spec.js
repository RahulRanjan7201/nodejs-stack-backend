const Stack = require("../../src/models/stack");
global.stackSize = 2;
describe("Stack display Operation", () => {
  it("should return value present in stack ", () => {
    global.stack = [15, 26];
    const res = Stack.getStacks();
    expect(res).toEqual(  global.stack );
  });
});
