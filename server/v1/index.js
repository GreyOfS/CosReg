const express = require("express");

const server = express();

server.listen(8000);

server.use('/', (req, rep) => {
    rep.end('Ping sur l\'adresse server')
})