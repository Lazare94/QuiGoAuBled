import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Heading } from "../Composants/Heading";
import { Input } from "../Composants/Input";
import { FilledButton } from "../Composants/FilledButton";
import { TextButton } from "../Composants/TextButton";
import { Error } from "../Composants/Error";
import { AuthContainer } from '../Composants/AuthContainer';
import { RadioButtons } from '../Composants/RadioButton';

// import { PhoneInput } from '../Composants/IdentifiantFlag';
// import{ PhoneInput }from 'react-native-phone-input';

export function LoginScreen({ navigation }) {
    const [value, setValue] = useState(0);
    const myinput = value === 0 ? (
        <Input
            style={styles.input}
            placeholder={"Email"}
            keyboardType={"email-address"}
        />
    ) : (
          
        <Input
             style={styles.input}
             placeholder={"Phone"}
            keyboardType={"phone-pad"}
         />
    )

    const handleClick = (value) => {
        setValue(value)

     }
    return (
        <AuthContainer>

            <Heading style={styles.titre}>Se connecter</Heading>
            <RadioButtons

                Valeur={[{ label: 'Se connecter avec email.', value: 0 }, { label: 'Se connecter avec le téléphone.', value: 1 }]}
                onPress ={handleClick}
            />

            <Error error={""} />
            {myinput}
            {/* <Input
                style={styles.input}
                placeholder={"Email"}
                keyboardType={"email-address"}
            /> */}
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
                title={"Aviez-vous un compte? Créer un"}
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
        marginBottom: 48,
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

