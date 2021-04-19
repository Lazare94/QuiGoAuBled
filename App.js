import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './Src/screens/Login';
import { RegisterScreen } from './Src/screens/Register';
export default function App() {
  return  <RegisterScreen/>;
    // <LoginScreen/> 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
