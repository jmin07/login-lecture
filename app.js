"use strict"

// 모듈
const express = require('express');
const app = express();

const PORT = 3000;

// 라우팅
// index.ejs 를 안 적어도 알아서 index 파일을 찾는다.
const home = require("./routes/home/index.js");

// 앱 세팅
// view를 세팅해놨기 때문에 경로에 view를 작성하지 않아도 된다.
app.set("views", "./views");
app.set("view engine", "ejs");

// use: 미들웨어를 등록하는 메소드
app.use("/", home);

module.exports = app;