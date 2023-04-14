"use strict";

const express = require("express");
const app = express();

// View setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

// routing
const home = require("./src/routes/home");
app.use("/", home);// 미들웨어 등록 메소드

module.exports = app;