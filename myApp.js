const express = require('express');
const helmet = require('helmet');
const app = express();

//Mount the helmet.hidePoweredBy() middleware
app.use(helmet.hidePoweredBy());

//Defence frameguard
app.use(helmet.frameguard({action: 'deny'}));

//Defence XSS Attack
app.use(helmet.xssFilter())

//Defence against sniff(noSniff)
app.use(helmet.noSniff());

//Defence against IE-Noopen
app.use(helmet.ieNoOpen());

//Defence against HSTS
var ninetyDaysInSeconds = 90*24*60*60
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}));

//Denfence against dnsPrefetchControl
app.use(helmet.dnsPrefetchControl());

//Defence against noCache
app.use(helmet.noCache());







































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
