console.log("News MAIL:");
var request = require('request');
var cheerio = require('cheerio');
let newsMessege = {};

request('https://mail.ru/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        let $ = cheerio.load(html);
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

exports.newsMessege = newsMessege;