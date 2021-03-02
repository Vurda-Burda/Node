const request = require('request');
const cheerio = require('cheerio');

let newsMessege = [];

request('https://mail.ru/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
    //    console.log(html)
        let $ = cheerio.load(html);
        // console.log(cheerio.text($('div a')));
        $('a').each(function(i, elem){
            if( i > 41 && i < 52 ) {
            let newEl = $(elem).text();
            // let newsMessege = [];
            // newsMessege.push.newEl;
            // let newsMessege=newEl.map(news,  => news);
            console.log(newEl);
            // console.log(newsMessege);
            };
        });

    } else {
        console.log(error, response.statusCode);
    }
});

