import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Heading} from '../Composants/Heading';
import {Input} from  '../Composants/Input';
import {FilledButton} from  '../Composants/FilledButton';
export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.titre}>LOGIN</Heading>
      <Input 
      style={styles.input} 
      placeholder ={'Email'}
       keyboardType={'email-address'} />
      <Input
       style={styles.input} placeholder ={'Mot de passe'}secureTextEntry/>
       <FilledButton title={'Login'} style={styles.loginButton} onPress={()=>{}} />
      <StatusBar style="auto" />{/* afffiche les icon de bacterie et autre */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
flex:1,
paddingTop:120,
alignItems:'center',
padding:20,

  },
  titre:{
    marginVertical:32,
  },
  input: {
      marginVertical:8,
  },
  loginButton: {
    marginVertical:32,
  },
});
