const mysql2 = require('mysql2');
const { options } = require('./config');

const pool = mysql2.createPool(options).promise();

let changeCell;

pool.query('select * from actor limit 0, 1')
    .then(([data, fields]) => { 
        changeCell = data;
        console.log(changeCell[0]);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        pool.end();
    });

const name = "Ivan";
const surname = "Sidorov";
const actor_id = 1;


pool.query(`UPDATE actor SET  first_name =?, last_name =? WHERE actor_id = ${actor_id}`,  [ name , surname] ) // изменение объектов
    .then(result =>{ 
      console.log(result[0]);
      return pool.query("SELECT * FROM actor"); // получение объектов
    })
    .then(result =>{
      console.log(result[0]);
      pool.end();
    })
    .then(()=>{
      console.log("пул закрыт");
    })
    .catch(function(err) {
      console.log(err.message);
    });

pool.query(`DELETE FROM actor WHERE actor_id = ${200}`)
    .then(result =>{ 
      console.log(result[0]);
      return pool.query("SELECT * FROM actor");
    })
    .then(result =>{
      console.log(result[0]);
      pool.end();
    })
    .then(()=>{
      console.log("пул закрыт");
    })
    .catch(function(err) {
      console.log(err.message);
    });