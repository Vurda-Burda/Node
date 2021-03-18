const express = require("express");
const app = express();
const path = require("path");
const newNews = require("./newsProgram");
const { text } = require("express");

const request = require('request');
const cheerio = require('cheerio');

app.use(express.static(path.join(__dirname, "/project")));

// app.get('/news', function (req, res) {
//     res.send(newNews);
//   });

app.post('/news', function (req, res) {
    res.send(newNews);
  })

app.listen(8080, () => console.log("Server run: "+"http://localhost:8080"));
