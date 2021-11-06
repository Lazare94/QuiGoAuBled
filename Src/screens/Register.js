import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";
import { Heading } from "../Composants/Heading";
import { Input } from "../Composants/Input";
import { FilledButton } from "../Composants/FilledButton";
import { Error } from "../Composants/Error";
import { IconButton } from "../Composants/IconButton";
import { AuthContainer } from "../Composants/AuthContainer";
import { RadioButtons } from "../Composants/RadioButton";
import axios from "axios";
import helpers from "../Controllers/Validation";

export function RegisterScreen({ navigation }) {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Email, setEmail] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [data, setdata] = useState();
  const [Password, setPassword] = useState("");
  const [ErrorValidation, setErrorValidation] = useState("");
  const [value, setValue] = useState(0);
  const [ErrorValidationLong, setErrorValidationLong] = useState("");
  const [ErrorValidationMi, setErrorValidationMi] = useState("");
  const [ErrorValidationMa, setErrorValidationMa] = useState("");
  const [ErrorValidationNbr, setErrorValidationNbr] = useState("");

  const AjouterUser = async () => {
    await axios
      .post("http://192.168.5.235:4000/Sign", {
        Email: Email,
        Password: Password,
        Phone: Phone,
        Nom: Nom,
        Prenom: Prenom,
      },{timeout:500000})
      .then((response) => setdata(response.data))
      .catch((err) => {
        console.log("caught it!", err);
      });
  };

  const myinput =
    value === 0 ? (
      <Input
        style={styles.input}
        placeholder={"Email"}
        onChangeText={(Email) => setEmail(Email)}
        Email={Email}
        keyboardType={"email-address"}
      />
    ) : (
      <Input
        style={styles.input}
        onChangeText={(Phone) => setPhone(Phone)}
        Phone={Phone}
        placeholder={"Téléphone"}
        keyboardType={"phone-pad"}
      />
    );

  const handleClick = (value) => {
    setPhone(null);
    setEmail(null);        
    setValue(value);
  };
  
  return (
    <AuthContainer>
      <Heading style={styles.titre}>Inscription</Heading>
      <RadioButtons
        Valeur={[
          { label: "Créer compte en utilisant le mail.", value: 0 },
          {
            label: "Créer compte en utilisant le numéro de téléphone",
            value: 1,
          },
        ]}
        onPress={
          handleClick}
      />

      <IconButton
        style={styles.closeIcon}
        name={"close"}
        onPress={() => {
          navigation.pop();
        }}
      />
      {/* {errorList} */}
       <Error error={ErrorValidation} /> 
       <Error error={ErrorValidationLong} />
      <Error error={ErrorValidationMa} />
      <Error error={ErrorValidationMi} />
      <Error error={ErrorValidationNbr} /> 
      <Input
        style={styles.input}
        onChangeText={(Nom) => setNom(Nom)}
        Nom={Nom}
        placeholder={"Nom"}
      />

      <Input
        style={styles.input}
        onChangeText={(Prenom) => setPrenom(Prenom)}
        Prenom={Prenom}
        placeholder={"Prénom"}
      />

      {myinput}
      <Input
        style={styles.input}
        onChangeText={(Password) => setPassword(Password)}
        Password={Password}
        required={true}
        placeholder={"Mot de passe"}
        secureTextEntry
      />

      <FilledButton
        title={"Inscrire"}
        style={styles.loginButton}
        onPress={() => {
         
          if (!helpers.validNom(Nom)) {
            setErrorValidation("Champ nom est vide");
            return;
          }
          if (!helpers.validPrenom(Prenom)) {
            setErrorValidation("Champ prénom est vide");
            return;
          }
          var RetourValid = helpers.IsValidUserInfo(Email, Phone);
         
          if(!RetourValid.ErrorUserSaisiEmailOrPhone){
            setErrorValidation(RetourValid.MessageErrorEmailOrPhone);
            return;
          }
          var RetourPasswordValid = helpers.ValidPassWord(Password);
          if (!RetourPasswordValid.Longueur) {
            setErrorValidationLong(
              "Le mot de passe doit comporter 8 caractères ou plus "
            );
          } else {
            setErrorValidationLong("");
          }
          if (!RetourPasswordValid.Minuscule) {
            setErrorValidationMi(
              "Le mot de passe doit contenir au moins 1 Lettre minuscule"
            );
          } else {
            setErrorValidationMi("");
          }
          if (!RetourPasswordValid.Majuscule) {
            setErrorValidationMa(
              "Le mot de passe doit contenir au moins 1 Lettre majuscule "
            );
          } else {
            setErrorValidationMa("");
          }
          if (!RetourPasswordValid.Nombre) {
            setErrorValidationNbr(
              "Le mot de passe doit contenir au moins 1 chiffre "
            );
          } else {
            setErrorValidationNbr("");
          }
          if (!RetourPasswordValid.CaractereSpeciaux) {
            setErrorValidation(
              "Le mot de passe doit contenir au moins 1 caractère spécial, "
            );
          } else {
            setErrorValidation("");
          }
          if (
            !RetourPasswordValid.CaractereSpeciaux ||
            !RetourPasswordValid.Nombre ||
            !RetourPasswordValid.Majuscule ||
            !RetourPasswordValid.Minuscule ||
            !RetourPasswordValid.Longueur
          ) {
            return;
          }
          if (RetourValid.ErrorUserSaisiEmailOrPhone == true) {
            AjouterUser();
            if (data === true) {
              setErrorValidation("");
              navigation.navigate("Login");
            } else if (data == false) {
              setErrorValidation(
                "Un utilisateur avec ce même numéro ou la même adresse existe déja"
              );
            }
          }
        }}
      />

      <StatusBar style="auto" />
      {/* afffiche les icon de bacterie et autre */}
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
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
  closeIcon: {
    position: "absolute",
    top: 60,
    right: 16,
  },
});
