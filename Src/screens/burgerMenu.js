//import React from "react"
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { SectionList, StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'
// export default class burgerMenu extends React.Component{  
// render(){
     
//     return (
//         <View>
//             <SafeAreaView style={{flex:1}}>
//                 <TouchableOpacity style={{alignItems:"flex-end",margin:16}}
//                 onPress={this.props.navigation.openDrawer}
//                 >
//                     <FontAwesome5 name="bars" size={24} color="#161924"/>
//                 </TouchableOpacity>
//                 <View styles={{flex:1,alignItems:"center",justifyContent:"center"}}>
//                     <Text style={styles.text}>{this.props.name} Screen</Text>
//                 </View>
//             </SafeAreaView>
//         </View>
//             //   <View style={styles.container}>
//             //     <SectionList
//             //       sections={[
//             //         {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//             //         {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//             //       ]}
//             //       renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//             //       renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//             //       keyExtractor={(item, index) => index}
//             //     />
//             //   </View>
//             );
//         }
        
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22,
//         backgroundColor:"#FFF"
//     },
//     text:{
//         color:"#161924",
//         fontSize:20,
//         fontWeight:"500"
//     },
//     });