const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./giftqr'),
    code = require('./giftpair');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/giftqr', server);
app.use('/code', code);
app.use('/giftpair',async (req, res, next) => {
res.sendFile(__path + '/giftpair.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/gifted.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Don't Forget To Give a Star

 Server running on http://localhost:` + PORT)
})

module.exports = app
