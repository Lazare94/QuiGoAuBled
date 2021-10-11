var bcrypt = require('bcrypt');

const Requete={

     Login:function(db,req,res){
        const email=req.body.Email
        const password=req.body.Password
        const phone=req.body.Phone
        var  saltRounds  = 10;
        bcrypt.hash(password,saltRounds,function(err,hash){
        db.query('SELECT * FROM users WHERE Email=? Or Phone=? AND Mdp=? ',
        [email,phone,hash],
        (error, results, fields)=>{
       console.log(results)
          if (error) throw error;
         res.send(results)
        })
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
          db.query('SELECT * FROM users WHERE Email=? AND Phone=?',
        [email,Phone],
        (error, results, fields)=>{
          console.log(results)
          console.log(results.length)
          if(results.length==0){
            db.query('INSERT INTO users (Nom,Prenom,Phone,Mdp,Email,DateCreation,TypeUser,EtatCompte) VALUES (?,?,?,?,?,?,?,?) ',
            [Nom,Prenom,Phone,hash,email,DateCreation,TypeUser,EtatCompte],
            (error, resultat, fields)=>{
               
              if (error) throw error;
            res.send(true)
            })
          } else {
            res.send(false)
          }
       //console.log(results)
          if (error) throw error;
        // res.send(results)
        })

          
    });
     }
}

module.exports= Requete