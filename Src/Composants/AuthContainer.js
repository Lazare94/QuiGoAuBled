import React from "react";
import { StyleSheet,ScrollView,View} from "react-native";

export function AuthContainer({children}){
return <ScrollView >
    <View style={styles.container}>{children}</View>
</ScrollView>

}

const styles = StyleSheet.create({
    container:{

        flexGrow:1,
        padding:16,
        paddingTop:120,
        alignItems:'center',
    },
});