
const express = require('express');
//var bodyParser = require('body-parser');
var cors=require('cors')
const mysql = require('mysql');
//const axios = require('axios').default;
const db = mysql.createPool({
    host     : 'localhost',
    //host     : '192.168.5.140', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : '',        // Your database's password.
    database : 'quigoaubled'   // Your database's name.
  });
const app = express();
app.use(express.json())
app.use(cors())

app.post("/login",(req,res)=>{
  const email=req.body.Email
  console.log(email)
  db.query('SELECT * FROM users WHERE Email=? ',
  [email],
  (error, results, fields)=>{

    if (error) throw error;

    res.send(results)
  });
});
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/login so you can see the data.');
});
