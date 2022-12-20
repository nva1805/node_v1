import mysql from 'mysql2/promise';

// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejsv1'
// });

console.log('connecting database');
const pool = mysql.createPool({host:'localhost', user: 'root', database: 'nodejsv1'});


export default pool