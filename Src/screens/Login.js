import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Heading} from '../Composants/Heading';
import {Input} from  '../Composants/Input';
import {FilledButton} from  '../Composants/FilledButton';
import {TextButton} from  '../Composants/TextButton';
import {Error} from '../Composants/Error';
export function LoginScreen() {
  return (
    <View style={styles.container}>
        
      <Heading style={styles.titre}>Se connecter</Heading>
      <Error error= {''}/>
      <Input 
      style={styles.input} 
      placeholder ={'Email'}
       keyboardType={'email-address'} />
      <Input
       style={styles.input} placeholder ={'Mot de passe'} secureTextEntry/>
       <FilledButton 
       title={'Connexion'}
        style={styles.loginButton} 
        onPress={()=>{}}
         />

       <TextButton 
       title={'Aviez-vous un compte? Creer un'}
       onPress={()=>{}}
        style={styles.TextButton}
         />
      <StatusBar style="auto" />{/* afffiche les icon de bacterie et autre */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
flex:1,
paddingTop:50,
alignItems:'center',
padding:20,

  },
  titre:{
    marginVertical:32,
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
});
