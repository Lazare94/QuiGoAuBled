var bcrypt = require('bcrypt');

const Requete={

     Login:function(db,req,res){
        const email=req.body.Email
        const password=req.body.Password
        const phone=req.body.Phone
        var  saltRounds  = 10;
        console.log(password)
        let requet="";
        console.log(password)
        bcrypt.hash(password,saltRounds,function(err,hash){
          if(email==""){
            requet="SELECT * FROM users WHERE Phone=?";
           }
           else{
             requet="SELECT * FROM users WHERE Email=? ";
           }
        db.query(requet,
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
       let requet="";
        var  saltRounds  = 10;
        bcrypt.hash(Mdp,saltRounds,function(err,hash){
          if(email==null){
           requet="SELECT * FROM users WHERE Phone=?";
          }
          else{
            requet="SELECT * FROM users WHERE Email=? ";
          }
          console.log(requet)
          db.query(requet,
        [email,Phone],
        (error, results, fields)=>{
          console.log(results)
          if(results.length==0){
            db.query('INSERT INTO users (Nom,Prenom,Phone,Mdp,Email,DateCreation,TypeUser,EtatCompte) VALUES (?,?,?,?,?,?,?,?) ',
            [Nom,Prenom,Phone,hash,email,DateCreation,TypeUser,EtatCompte],
            (error, resultat, fields)=>{
               console.log(resultat)
              if (error) throw error;
            res.send(true)
            })
          } else {
            res.send(false)
          }
          if (error) throw error;
        })

          
    });
     }
}

module.exports= Requete