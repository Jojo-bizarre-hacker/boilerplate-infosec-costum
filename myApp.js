const express = require('express');
const helmet = require('helmet');
const app = express();

//Mount the helmet.hidePoweredBy() middleware
app.use(helmet.hidePoweredBy());

//Defence frameguard
app.use(helmet.frameguard({action: 'deny'}));

//Defence XSS Attack
app.use(helmet.xssFilter())
















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`infosec app is listening on port ${port}`);
});
