//import React from "react"
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    SectionList,
    StyleSheet,
    Text,
    ScrollView,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AuthContainer } from "../Composants/AuthContainer";
//import {createDrawerNavigator} from 'react-navigation-drawer';
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation";
export function AccueilScreen({ navigation }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 22,
            backgroundColor: "#FFF",
        },
        //   item: {
        //     padding: 10,
        //     fontSize: 18,
        //     height: 44,
        //   },
        text: {
            color: "#161924",
            fontSize: 20,
            fontWeight: "500",
        },
    });
    return (
        <AuthContainer>
                <SectionList
                    sections={[
                        {
                            title: "D",
                            data: [
                                "Devin",
                                "Dan",
                                "Dominic"
                            ],
                        },
                        {
                            title: "J",
                            data: [
                                "Jackson",
                                "James",
                                "Jillian",
                                "Jimmy",
                                "Joel",
                                "John"
                            ],
                        },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={(item, index) => index}
                />
        </AuthContainer>
    );
    // const createDrawerNavigator=createDrawerNavigator({

    // });
    //         return (
    //             <AuthContainer>
    //             <view>
    //                 <SafeAreaView style={{flex:1}}>
    //                     <TouchableOpacity style={{alignItems:"flex-end",margin:16}}
    //                     onPress={this.props.navigation.openDrawer}
    //                     >
    //                         <FontAwesome5 name="bars" size={24} color="#161924"/>
    //                     </TouchableOpacity>
    //                 </SafeAreaView>
    //             </view>
    //             </AuthContainer>
    //         //   <View style={styles.container}>
    //         //     <SectionList
    //         //       sections={[
    //         //         {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    //         //         {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    //         //       ]}
    //         //       renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    //         //       renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    //         //       keyExtractor={(item, index) => index}
    //         //     />
    //         //   </View>
    //         );
}
