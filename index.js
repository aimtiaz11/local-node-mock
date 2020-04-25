const express = require('express');
const fs = require('fs');
const logger = require('creepy-logger');
const httpMapper = require('./http-mappers');
const app = express();
const https = require('https')
const config = require('./config');

const env= config.env;

const bodyParser = require('body-parser');

app.use(bodyParser())


app.all("*", (req, res, next) => {
    next();
});

// Add all your mock routes and handlers
app.get('api/v1/message', httpMapper.myApp.successResponse);

// Create app
https.createServer({
    key: fs.readFileSync(`certs/server.key`),
    cert: fs.readFileSync(`certs/server.cert`)
  }, app)
  .listen(config.port, () => {
    console.log(`Local Mocks listening on ${config.port}! Go to https://localhost:${config.port}/`)
  });