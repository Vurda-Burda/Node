console.log("News MAIL:");
var request = require('request');
var cheerio = require('cheerio');
request('https://mail.ru/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
    //    console.log(html)
        let $ = cheerio.load(html);
        // console.log(cheerio.text($('div a')));
        $('a').each(function(i, element){
            if( i > 41 && i < 53 ) {
            console.log($(element).text());
            };
        });
        
    } else {
        console.log(error, response.statusCode);
    }
});
