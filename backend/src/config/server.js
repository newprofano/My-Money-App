const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);


server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;

//precisa ser exportado para usar sempre a mesma referência
