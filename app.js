"use strict";

const express = require("express");
const app = express();

// View setting
app.set("views", "./views");
app.set("view engine", "ejs");

// routing
const home = require("./routes/home");
app.use("/", home);// 미들웨어 등록 메소드

module.exports = app;