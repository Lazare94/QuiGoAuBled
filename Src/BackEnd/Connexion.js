const mysql = require('mysql');
const db = mysql.createPool({
    host     : 'localhost',
    //host     : '192.168.5.140', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : '',        // Your database's password.
    database : 'quigoaubled'   // Your database's name.
  });


  module.exports= db;