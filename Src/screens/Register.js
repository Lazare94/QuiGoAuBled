import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import {Heading} from '../Composants/Heading';
import {Input} from  '../Composants/Input';
import {FilledButton} from  '../Composants/FilledButton';
import {TextButton} from  '../Composants/TextButton';
import {Error} from '../Composants/Error';
import {IconButton} from '../Composants/IconButton';
import { AuthContainer } from '../Composants/AuthContainer';
export function RegisterScreen({navigation}) {
  return (
    <AuthContainer> 
      <Heading style={styles.titre}>Inscription</Heading>

      <IconButton style={styles.closeIcon} name={'close'} onPress={()=>{

      navigation.pop();
      }} />

      <Error error= {''}/>

      <Input
       style={styles.input} placeholder ={'Nom'}/>
        <Input
       style={styles.input} placeholder ={'Prénom'}/>
        <Input
       style={styles.input} placeholder ={'Téléphone'} />
      <Input 
      
      style={styles.input} 
      placeholder ={'Email'}
       keyboardType={'email-address'} />

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
