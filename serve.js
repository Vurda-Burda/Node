const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const newNews = require('./newsProgram.js');
app.use(express.static(path.join(__dirname, "/project")));

app.get('/', function (req, res) {
    res.send('hello world')
  })



// fs.readFile("info.json", 'utf8', function(err, contents) {
//     console.log(contents);
// });


// let data = "This is a file containing a collection of books."; 
  
// fs.writeFile("books.txt","Hello", (err) => { 
//   if (err) 
//     console.log(err); 
//   else { 
//     console.log("File written successfully\n"); 
//     console.log("The written has the following contents:"); 
//     console.log(fs.readFileSync("books.txt", "utf8")); 
//   } 
// }); 

app.listen(8080, () => console.log("Server run: "+"http://localhost:8080"));
