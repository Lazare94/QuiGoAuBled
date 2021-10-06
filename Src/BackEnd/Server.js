
const express = require('express');
var cors=require('cors')
const mysql = require('mysql');
const Requete = require('./Requetes');
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
   Requete.Login(db,req,res)
});
app.post('/Sign',(req,res)=>{
 // Requete.Login(db,req,res)
  Requete.Sign(db,req,res)
});
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/login so you can see the data.');
});
