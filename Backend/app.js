const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();

const cors = require('cors')
app.use(cors())
const requestIp = require('request-ip');

const Users = require("./routers/users")
const Messages = require("./routers/messages")

app.use(function (req, res, next) {
  next();
});
app.use(requestIp.mw({ attributeName : 'user_ip' }))


app.use(express.json());

app.use("/users", Users);
app.use("/messages", Messages);

app.all("*", (req, res) => {
  res.sendStatus(404)
});

module.exports = app;
