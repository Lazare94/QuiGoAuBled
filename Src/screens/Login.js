import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet} from "react-native";
import { Heading } from "../Composants/Heading";
import { Input } from "../Composants/Input";
import { FilledButton } from "../Composants/FilledButton";
import { TextButton } from "../Composants/TextButton";
import { Error } from "../Composants/Error";
import { AuthContainer } from '../Composants/AuthContainer';
import { RadioButtons } from '../Composants/RadioButton';
import axios from "axios";
import helpers from '../Controllers/Validation'; 

export function LoginScreen({ navigation }) {
    const [Email,setEmail] =useState ('');
     const [Phone,setPhone] =useState (null);
     const [user,setuser] =useState ([]);
     const [Password,setPassword] =useState ('');
     const [ErrorValidation,setErrorValidation] =useState ('');
    const [value, setValue] = useState(0);


    const getUser=async()=>{
        console.log('allo1')
       await axios.post('http://169.254.41.84:4000/login',{
            Email:Email,
            Password:Password
        })
        .then(user => setuser(user.data))
        .then(j=>helpers.VerifierUse(user,Email,Phone))
        .catch(err => {
            console.log('caught it!',err.status);
        })}

    const myinput = value === 0 ? (
        <Input
            style={styles.input}
            onChangeText={Email=>setEmail(Email)}
            Email={Email}
            placeholder={"Adresse Email"}
           // keyboardType={"email-adress"}   
        />
    ) : ( 
        <Input
            style={styles.input}
            onChangeText={Phone=>setPhone(Phone)}
            Phone={Phone}
            placeholder={"Numéro téléphone "}
            keyboardType={"tel"}         
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

            <Error error={ErrorValidation} />
            {myinput}
            <Input
                style={styles.input}
                onChangeText={Password =>setPassword(Password)}
                Password={Password}
                placeholder={"Mot de passe"}
                secureTextEntry
               
            />
            <FilledButton
                title={"Connexion"}
                style={styles.loginButton}
                onPress={() => {
                   const RetourValidEmail= helpers.IsValidEmail(Email)
                   setErrorValidation(RetourValidEmail.ErrorvalidEmail)
                   if (RetourValidEmail.ErrorEmail==true){getUser()}
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
