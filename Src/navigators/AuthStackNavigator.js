import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,DrawerActions
} from '@react-navigation/drawer';
import { LoginScreen } from '../screens/Login';
import { RegisterScreen } from '../screens/Register';
import { AccueilScreen } from '../screens/Accueil';
import { MessageScreen } from '../screens/Messages';
import { DeconnexionScreen } from '../screens/Deconnexion';
import { FontAwesome5 } from "@expo/vector-icons";
import{ProfilScreen} from '../screens/Profil';
import { StyleSheet } from 'react-native';
const AuthStack=createStackNavigator();
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  console.log(props)
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} /> 
      <DrawerItem
        label="Close drawer"
        //onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem name="Accueil"
        label="Déconnexion"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  ); 
}
export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="AccueilScreen"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
       <Drawer.Screen name="Accueil" component={AccueilScreen} />
      <Drawer.Screen name="Profil" component={ProfilScreen} />
      <Drawer.Screen name="Message" component={MessageScreen} />  
    </Drawer.Navigator>
  );
}
export function AuthStackNavigator({navigation}) {
  return(
     <AuthStack.Navigator
     //mode={'modal'}
     screenOptions={{
       headerShown:false, //fait disparaitre les titres 
       headerStyle:{
         backgroundColor:'#009387',
       },
       headerTintColor:'#fff',
       headerTitleStyle:{
         fontWeight:'bold'
       }
     }}>
          <AuthStack.Screen name={'Liste des annonces'} component={MyDrawer}
            options={{
              title:'Liste des annonces ',
              headerLeft:()=>(
                
                <FontAwesome5 name="bars" size={25} backgroundColor="009387"
                onPress={()=>navigation.openDrawer()}></FontAwesome5> 
              )
            }}
          
          />   
            <AuthStack.Screen name={'Accueil'} component={AccueilScreen}/> 
         <AuthStack.Screen  name={'Login'} component={LoginScreen}/> 
        <AuthStack.Screen name={'Register'} component={RegisterScreen}/> 
        <AuthStack.Screen name={'Message'} component={MessageScreen}/>
        <AuthStack.Screen name={'Deconnexion'} component={DeconnexionScreen}/>
          <AuthStack.Screen name={'Profil'} component={ProfilScreen}/> 
     </AuthStack.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});