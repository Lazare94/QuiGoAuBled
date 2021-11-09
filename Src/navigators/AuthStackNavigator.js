import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LoginScreen } from '../screens/Login';
import { RegisterScreen } from '../screens/Register';
import { AccueilScreen } from '../screens/Accueil';
import { MessageScreen } from '../screens/Messages';
import { DeconnexionScreen } from '../screens/Deconnexion';
import{ProfilScreen} from '../screens/Profil';
const AuthStack=createStackNavigator();

export function AuthStackNavigator() {
  return(

    <AuthStack.Navigator
    mode={'modal'}
    screenOptions={{
      headerShown:false, //fait disparaitre les titres 
    }}>
        <AuthStack.Screen name={'Accueil'} component={AccueilScreen}/>
       <AuthStack.Screen name={'Profil'} component={ProfilScreen}/>
       <AuthStack.Screen  name={'Login'} component={LoginScreen}/>
       <AuthStack.Screen name={'Register'} component={RegisterScreen}/>
       <AuthStack.Screen name={'Message'} component={MessageScreen}/>
       <AuthStack.Screen name={'Deconnexion'} component={DeconnexionScreen}/>
     
     

    </AuthStack.Navigator>
  );
}
