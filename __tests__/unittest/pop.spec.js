const Stack = require("../../src/models/stack");
global.stackSize = 2;
describe("Stack pop Operation", () => {
  beforeEach(() => {
    global.stack = [];
  });
  it("should pop value from stack ", () => {
    global.stack = [15, 26];
    const res = Stack.popStack();
    expect(res).toEqual(26);
  });
  it("should throw error if stack is empty", () => {
    try {
        Stack.popStack();
   } catch (err) {
      expect(err.message).toBe(
        "Stack Underflow. Please insert into stack"
      );
    }
  });
});
