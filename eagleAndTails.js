const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin, 
output: process.stdout 
});

const fs = require("fs");
const { Console } = require('console');

let quantityGame = 0;
let quantityWin = 0;
let quantityLose = 0;


rl.question('Do you want to play а game "eagle or tails"? If yes enter 1, if no enter any button! - ', function(answer) {
    if( answer == 1) {
    console.log('Enter the number: 1 = eagle, 2 = tails!');
    rl.on('line', function (cmd) {
        const gameNumber = Math.random()*10;
        quantityGame++;
        let eagleOrTails;
        if (gameNumber < 5 ) {
            eagleOrTails = 1;    
            } else if (gameNumber > 5) {
            eagleOrTails = 2;
            } else {  
              rl.close();
            };
        if (String(cmd) === String("q")) {
            quantityGame--;
            console.log("You out!")
            console.log("Quantity game - " + quantityGame);
            console.log("Quantity win - " + quantityWin);
            console.log("Quantity lose - " + quantityLose);
            logGameFunction ();
            rl.close();
        }else if (Number(cmd) > 2 || Number(cmd) < 1 || isNaN(Number(cmd))){
            console.log("You entered incorrect data!");
            console.log("Repeat enter!");
        } else if (Number(cmd) !== Number(eagleOrTails)) {
            quantityLose++;
            console.log('You lose! For out enter q!');
        } else if (Number(cmd) === Number(eagleOrTails)) {
            quantityWin++;
            console.log('You win! For out enter q!');
        }; 
    });
    } else {
        console.log("You gave up the game");
        rl.close();
    };
});
 
function logGameFunction () {
let logger;
if (quantityGame > 0) {
    logger = new Console(fs.createWriteStream('log.txt'));
    logger.log("Quantity game - " + quantityGame, "Quantity win - " + quantityWin, "Quantity lose - " + quantityLose);
} else {
logger = console;
};
};
