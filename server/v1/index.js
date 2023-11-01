require("dotenv").config()

const express   = require("express");
const morgan    = require("morgan");

const router = require("./router");

const server = express();

server.use(morgan("dev"));

server.use("/", router);

server.listen(8000);