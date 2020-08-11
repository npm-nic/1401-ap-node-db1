const express = require("express");
const accountsRouter = require("./accounts/accounts-router");

const server = express();
server.use(express.json());
server.use("/api/accounts", accountsRouter);

// // --> /hello <-- // //
server.get("/hello", (req, res) => res.status(200).json({ hello: "world" }));

module.exports = server;
