const express = require('express');
const http = require('http');

var app = express();

app.get('/', (request, response) => {
  response.send('Go to /whoami to see information about your system.');
})

app.get('/whoami', (request, response) => {
  let languagesAccepted = request.acceptsLanguages()[0];
  let userAgent = request.headers['user-agent']; 
  let software = userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
  let ip = request.ip;
  response.json({
    "ip": ip,
    "language": languagesAccepted,
    "software": software, 
  });
});

app.listen(3000);