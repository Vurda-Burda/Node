var ansi = require('ansi')
  , cursor = ansi(process.stdout);

    cursor.green();

    let a = "";
    for (let b = 0; b < 20; b++) {
        a+="*";
        console.log(a);
    };
    console.log(a);

    cursor.reset();
