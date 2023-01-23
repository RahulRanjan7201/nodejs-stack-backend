const { errorCode } = require("../utility/error");
const logger = require("../utility/logger");

const operations = {
  getStacks: () => {
    return global.stack;
  },
  pushStack: (value) => {
      if (global.stack.length == global.stackSize) {
        logger.error("Stack overflow");
        throw errorCode(
          400,
          "Stack Overflow. Please remove the value from Stack to push"
        );
      } else {
        global.stack.push(value);
        return stack;
      }
  },
  popStack: () => {
    if (!global.stack.length) {
        logger.error("Stack Underflow");
        throw errorCode(400, "Stack Underflow. Please insert into stack")
    } else {
       return  global.stack.pop();
    }
  },
};
module.exports = operations;
