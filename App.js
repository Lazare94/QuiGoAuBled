import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '@react-navigation/drawer'
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AuthStackNavigator, MyDrawer } from './Src/navigators/AuthStackNavigator';
import {lightTheme} from './Src/Themes/light'
import { ProfilScreen } from './Src/screens/Profil';
import { MessageScreen } from './Src/screens/Messages';
const RootStack=createStackNavigator();

const AuthStack=createStackNavigator();

 function App() {
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
export default App;
