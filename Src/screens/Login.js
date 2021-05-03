import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,ScrollView ,View } from "react-native";
import { Heading } from "../Composants/Heading";
import { Input } from "../Composants/Input";
import { FilledButton } from "../Composants/FilledButton";
import { TextButton } from "../Composants/TextButton";
import { Error } from "../Composants/Error";
import { AuthContainer } from '../Composants/AuthContainer';


export function LoginScreen({ navigation }) {
    return (
        <AuthContainer>
           
            <Heading style={styles.titre}>Se connecter</Heading>
            <Error error={""} />
            <Input
                style={styles.input}
                placeholder={"Email"}
                keyboardType={"email-address"}
            />
            <Input
                style={styles.input}
                placeholder={"Mot de passe"}
                secureTextEntry
            />
            <FilledButton
                title={"Connexion"}
                style={styles.loginButton}
                onPress={() => {
                    // navigation.navigate("Register");
                }}
            />

            <TextButton
                title={"Aviez-vous un compte? Creer un"}
                onPress={() => { 
                    navigation.navigate("Register");
                }}
                style={styles.TextButton}
            />
            <StatusBar style="auto" />
            {/* afffiche les icon de bacterie et autre */}

        </AuthContainer>
    );
}

const styles = StyleSheet.create({
   
    titre: {
        marginBottom:48,
    },
    input: {
        marginVertical: 8,
    },
    loginButton: {
        marginVertical: 32,
    },
    TextButton: {
        marginVertical: 32,
    },
});
