import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LoginScreen } from '../screens/Login';
import { RegisterScreen } from '../screens/Register';

const AuthStack=createStackNavigator();

export function AuthStackNavigator() {
  return(

    <AuthStack.Navigator
    mode={'modal'}
    screenOptions={{
      headerShown:false, //fait disparaitre les titres 
    }}>
       <AuthStack.Screen name={'Login'} component={LoginScreen}/>
       <AuthStack.Screen name={'Register'} component={RegisterScreen}/>
    </AuthStack.Navigator>
  );
}
