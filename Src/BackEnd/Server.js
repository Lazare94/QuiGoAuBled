const express = require('express');
var cors=require('cors')
const db = require('./Connexion')
const app = express();
const Requete = require('./Requetes');

app.use(express.json())
app.use(cors())

app.post("/Login",(req,res)=>{
   Requete.Login(db,req,res)
});
app.post('/Sign',(req,res)=>{
  Requete.Sign(db,req,res)
});
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/login so you can see the data.');
});
