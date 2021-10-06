var bcrypt = require('bcrypt');

const Requete={

     Login:function(db,req,res){
        const email=req.body.Email
        console.log(email)
        db.query('SELECT * FROM users WHERE Email=? ',
        [email],
        (error, results, fields)=>{
      
          if (error) throw error;
      
          res.send(results)
        });
        
     },
    Sign:function(db,req,res){
        const email=req.body.Email;
        const Nom=req.body.Nom;
        const Prenom=req.body.Prenom;
        const Phone=req.body.Phone;
        const Mdp=req.body.Password;
        const DateCreation= new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        const TypeUser=1;
        const EtatCompte="Actif";
        var  saltRounds  = 10;
        console.log(email)
        bcrypt.hash(Mdp,saltRounds,function(err,hash){
            console.log(hash)
        db.query('INSERT INTO users (Nom,Prenom,Phone,Mdp,Email,DateCreation,TypeUser,EtatCompte) VALUES (?,?,?,?,?,?,?,?) ',
        [Nom,Prenom,Phone,hash,email,DateCreation,TypeUser,EtatCompte],
        (error, results, fields)=>{
            console.log(hash);
          if (error) throw error;
        res.send(results)
        })
    });
     }
}

module.exports= Requete