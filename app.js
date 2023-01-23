const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const configOptions = require('./src/config/options.json');
// setting config in global var
global.stackSize = configOptions.stacksize;
global.stack = configOptions.stack;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
const stackController = require('./src/controllers/stack')
// gobal config 
app.use('/', stackController);

app.listen(configOptions.server.port, () => {
  console.log(`Server is started and listening on port ${configOptions.server.port}`)
})
module.exports = app