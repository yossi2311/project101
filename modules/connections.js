const mysql2 = require('mysql2')
// const connection = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: "airline"
// });
const knex = require('knex').knex({
    client :'mysql2', 
connection :{
    host : 'localhost',
    port : 3306,
    user: 'root',
    password: 'yossi231185',
    database: "airline"
}
});

module.exports= { 
    // connection,
    knex
}