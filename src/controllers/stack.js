const express = require("express");
const router = express.Router();
const logger = require("../utility/logger");
const operations = require("../models/stack");
router.get("/", (req, res) => {
  logger.info("Incoming request to display stack.");
  const result = operations.getStacks();
  res.json({data:result});
});

router.put("/", validateValue, (req, res) => {
  logger.info("Incoming request for push operation.");
  try {
    operations.pushStack(req.body.value);
    res.json({message:"value is pushed to stack successfully"});
  } catch (err) {
    logger.error("Error:", err.stack);
    res.status(400).json({error:err.message});
  }
});

router.delete("/", (req, res) => {
  logger.info("Incoming request for pop operation.");
  try {
    const poppedValue = operations.popStack();
    res.json({message:`${poppedValue} value is pop from stack successfully`});
  } catch (err) {
    logger.error("Error:", err.stack);
    res.status(400).json({error:err.message});
  }
});

function validateValue(req, res, next) {
  if(req.body && req.body.value == '0') {
    next();
  }
  if (!req.body || !req.body.value) {
    logger.error("value is not present");
    return res.status(400).json({message:"value should be present"});
  }
  // what are the values present can check that
  else if (isNaN(Number(req.body.value))) {
    logger.error("value should be number");
    return res.status(400).send({message:"value should be of number type"});
  }
  next();
}
module.exports = router;
