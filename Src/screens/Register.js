import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {Heading} from '../Composants/Heading';
import {Input} from  '../Composants/Input';
import {FilledButton} from  '../Composants/FilledButton';
import {Error} from '../Composants/Error';
import {IconButton} from '../Composants/IconButton';
import { AuthContainer } from '../Composants/AuthContainer';
import { RadioButtons } from '../Composants/RadioButton';
import axios from "axios";
import helpers from '../Controllers/Validation';

export function RegisterScreen({navigation}) {
  const [Nom,setNom] =useState ('');
  const [Prenom,setPrenom] =useState ('');
  const [Email,setEmail] =useState ('');
  const [Phone,setPhone] =useState (null);
 // const [user,setuser] =useState ([]);
  const [Password,setPassword] =useState ('');
  const [ErrorValidation,setErrorValidation] =useState ('');
  const [value, setValue] = useState(0);
  //var  bcrypt  = require ( ' bcryptjs ' ) ; 
   const AjouterUser=async()=>{
   //await axios.post('http://169.254.41.84:4000/Sign',{
    await axios.post('http://192.168.5.235:4000/Sign',{
        Email:Email,
        Password:Password,
        Phone:Phone,
        Nom:Nom,
        Prenom:Prenom
    })
    .then(response => {
      console.log(response);
    })
    //.then(j=>helpers.VerifierUse(user,Email,Phone))
    .catch(err => {
        console.log('caught it!');
    })}


    const myinput = value === 0 ? (
        <Input
            style={styles.input}
            placeholder={"Email"}
            onChangeText={Email=>setEmail(Email)}
            Email={Email}
            keyboardType={"email-address"}
        />
    ) : (
          
        <Input
             style={styles.input}
             onChangeText={Phone=>setPhone(Phone)}
             Phone={Phone}
             placeholder={"Téléphone"}
            keyboardType={"phone-pad"}
         />
    )

    const handleClick = (value) => {
        setValue(value)

     }

  return (
    <AuthContainer> 
      <Heading style={styles.titre}>Inscription</Heading>
      <RadioButtons
        Valeur={[{ label: 'Créer compte en utilisant le mail.', value: 0 }, { label: 'Créer compte en utilisant le numéro de téléphone', value: 1 }]}
        onPress ={handleClick}
    />

      <IconButton style={styles.closeIcon} name={'close'} onPress={()=>{
     
      navigation.pop();
      }} />

      <Error error= {ErrorValidation}/>

      <Input
       style={styles.input}
       onChangeText={Nom=>setNom(Nom)}
       Nom={Nom}
       placeholder ={'Nom'}/>
       
      <Input
       style={styles.input}
       onChangeText={Prenom=>setPrenom(Prenom)}
       Prenom={Prenom}
       placeholder ={'Prénom'}/>
       
         {myinput}
      <Input
       style={styles.input} 
       onChangeText={Password=>setPassword(Password)}
       Password={Password}
       placeholder ={'Mot de passe'} secureTextEntry/>
       <FilledButton 
       title={'Inscrire'}
        style={styles.loginButton} 
        onPress={()=>{
          const RetourValidEmail= helpers.IsValidEmail(Email);
          setErrorValidation(RetourValidEmail.ErrorvalidEmail);
        //setPassword(helpers.HachageMotPasse(Password));
        console.log(Password);
        if (RetourValidEmail.ErrorEmail==true){ AjouterUser()}
        
        }}
         />

      <StatusBar style="auto" />{/* afffiche les icon de bacterie et autre */}

    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  titre:{
    marginBottom:48,
  },
  input: {
      marginVertical:8,
  },
  loginButton:{
    marginVertical:32,
  },
  TextButton: {
    marginVertical:32,
  },
  closeIcon:{
  position:'absolute',
    top:60,
    right:16,
    
  },
});
