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
import { MyDrawer } from "../navigators/AuthStackNavigator";
// import {
//     Spinner,
//     HStack,
//     Heading,
//     Center,
//     NativeBaseProvider,
//   } from "native-base"
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
            <SafeAreaView style={styles.container} color="#161924">
                <TouchableOpacity style={{alignItems:"flex-end",margin:16}}
                //onPress={() => navigation.toggleDrawer()}
                onPress={MyDrawer}
                >
                <FontAwesome5 name="bars" size={24} color="#161924"></FontAwesome5>
              

    {/* <HStack space={2} alignItems="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack> */}
                </TouchableOpacity>
            {/* <Text>Page content</Text> */}
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FFF'
    },
  });
  