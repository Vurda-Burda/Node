const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
// const newNews = require('./newsProgram.js');
const { text } = require("express");

const request = require('request');
const cheerio = require('cheerio');

let newsMessege = {};

request('https://mail.ru/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
    //    console.log(html)
        let $ = cheerio.load(html);
        // console.log(cheerio.text($('div a')));
        $('a').each(function(i, elem, allelem){
            if( i > 41 && i < 52 ) {
            let newEl = $(elem).text();
            newsMessege[i] = newEl;
            console.log(newEl);
            };
        });

    } else {
        console.log(error, response.statusCode);
    }
});

app.use(express.static(path.join(__dirname, "/project")));

app.get('/news', function (req, res) {
    res.send(newsMessege);
  });



// fs.readFile("info.json", 'utf8', function(err, contents) {
//     console.log(contents);
// });


//  let data = JSON.stringify(jsonnewsMessege); 
  
// fs.writeFile("news.json",data, (err) => { 
//   if (err) 
//     console.log(err); 
//   else { 
//     console.log("File written successfully\n"); 
//     console.log("The written has the following contents:"); 
//     console.log(fs.readFileSync("news.json", "utf8")); 
//   } 
// }); 

app.listen(8080, () => console.log("Server run: "+"http://localhost:8080"));
