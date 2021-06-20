import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import {Heading} from '../Composants/Heading';
import {Input} from  '../Composants/Input';
import {FilledButton} from  '../Composants/FilledButton';
import {Error} from '../Composants/Error';
import {IconButton} from '../Composants/IconButton';
import { AuthContainer } from '../Composants/AuthContainer';
import { RadioButtons } from '../Composants/RadioButton';
import { useState} from "react";

export function RegisterScreen({navigation}) {
   const [valeur, setValeur] = useState("123"); 
   const [value, setValue] = useState(0);
    const myinput = value === 0 ? (
        <Input
            style={styles.input}
            placeholder={"Email"}
            keyboardType={"email-address"}
        />
    ) : (
          
        <Input
             style={styles.input}
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

      <Error error= {""}/>

      <Input
       style={styles.input} placeholder ={'Nom'}/>
      <Input
       style={styles.input} placeholder ={'Prénom'}/>
       
         {myinput}
      <Input
       style={styles.input} placeholder ={'Mot de passe'} secureTextEntry/>
       <FilledButton 
       title={'Inscrire'}
        style={styles.loginButton} 
        onPress={()=>{}}
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
