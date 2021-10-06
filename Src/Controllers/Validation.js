let i=0;
const helpers={

    IsValidEmail: function(Email){
        const ValidEmail={
            ErrorEmail:false,
            ErrorvalidEmail:""
        }
         if (Email=== undefined){
            ValidEmail.ErrorvalidEmail='Veuillez remplir tous les champs' 
          return ValidEmail;
         }
         else if(Email!=undefined && Email!=""){
             const ValidRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
             try {
                 ValidRegex.test(Email)
               
                 if(!ValidRegex.test(Email)){
                     ValidEmail.ErrorEmail=false
                     ValidEmail.ErrorvalidEmail='Email invalide' 
                    return ValidEmail
                 }else{
                    ValidEmail.ErrorEmail=true
                    return ValidEmail;
                 }
             } catch (error) {
                console.log(error)
             }  
         }
     },
     VerifierUse :function(user,Email,Phone){

            for (i=0;i<user.length ;i++){
              if(user[i].Email==Email ||user[i].Phone==Phone){
                  console.log('user existe');
              }
            }
     }
    
}
export default helpers ;
