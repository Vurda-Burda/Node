// const readline = require('readline');
// const rl = readline.createInterface({
// input: process.stdin, 
// output: process.stdout 
// });

const gameNumber = Math.random()*10;
const eagleOrTails = "";

function game () {
     if (gameNumber < 5 ) {
    eagleOrTails = "eagle";
    console.log(eagleOrTails);    
    } else if (gameNumber > 5) {
    eagleOrTails = "tails";
    console.log(eagleOrTails);
    } else {
    return game ();
    };
};

console.log(eagleOrTails);
// var readline = require('readline');
// var rl = readline.createInterface({
// input: process.stdin, // ввод из стандартного потока
// output: process.stdout // вывод в стандартный поток
// });

// rl.on('line', function (cmd) {
//     console.log('You just typed: '+cmd);
//     if (cmd === 'quit') {
//         rl.close();
//     }
// });

// rl.question('What is your favorite food?', function(answer) {
//     console.log('Oh, so your favorite food is ' + answer);
//     rl.close();
// });