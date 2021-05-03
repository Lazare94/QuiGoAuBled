import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthStackNavigator } from './Src/navigators/AuthStackNavigator';
import {lightTheme} from './Src/Themes/light'
const RootStack=createStackNavigator();

const AuthStack=createStackNavigator();

export default function App() {
  return(

    <NavigationContainer theme={lightTheme}>

      <RootStack.Navigator screenOptions={{
        headerShown:false,
      }}>

        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
        <RootStack.Screen name={'HomeStack'} component={AuthStackNavigator}/>
      </RootStack.Navigator>

    </NavigationContainer>
  );
}

