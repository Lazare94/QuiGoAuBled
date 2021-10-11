import { isValidPhoneNumber } from "react-phone-number-input";
let i = 0;
const helpers = {
  validNom: function (Nom) {
    if (Nom === undefined || Nom === "") {
      return false;
    } else {
      return true;
    }
  },
  validPrenom: function (Prenom) {
    if (Prenom === undefined || Prenom === "") {
      return false;
    } else {
      return true;
    }
  },
  ValidPassWord: function (PassWord) {
    const IsValidInfosPassWord = {
      Longueur: false,
      Majuscule: false,
      Minuscule: false,
      Nombre: false,
      CaractereSpeciaux: false,
    };
    if (PassWord === undefined || PassWord === "") {
      return false;
    } else if (PassWord != undefined && PassWord != null) {
      var ValidRegexMi = new RegExp("^(?=.*[a-z])");
      if (ValidRegexMi.test(PassWord)) {
        IsValidInfosPassWord.Minuscule = true;
      }
      var ValidRegexMa = new RegExp("^(?=.*[A-Z])");
      if (ValidRegexMa.test(PassWord)) {
        IsValidInfosPassWord.Majuscule = true;
      }
      var ValidRegexNbr = new RegExp("^(?=.*[0-9])");
      if (ValidRegexNbr.test(PassWord)) {
        IsValidInfosPassWord.Nombre = true;
      }
      var ValidRegexMdp = new RegExp("^(?=.*[!@#$%^&*])");
      if (ValidRegexMdp.test(PassWord)) {
        IsValidInfosPassWord.CaractereSpeciaux = true;
      }
      var ValidRegexLong = new RegExp("^(?=.{8,})");
      if (ValidRegexLong.test(PassWord)) {
        IsValidInfosPassWord.Longueur = true;
      }
      return IsValidInfosPassWord;
    }
  },

  IsValidUserInfo: function (Email, Phone) {
    const IsValidInfos = {
      ErrorUserSaisi: false,
      ErrorValidUserSaisi: "",
    };
    if (Phone === null && Email === null) {
      IsValidInfos.ErrorValidUserSaisi =
        "Veuillez remplir Email ou le numéro de téléphone";
      return IsValidInfos;
    } else if (Email != undefined && Email != null) {
      const ValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      try {
        if (!ValidRegex.test(Email)) {
          IsValidInfos.ErrorUserSaisi = false;
          IsValidInfos.ErrorValidUserSaisi = "Email invalide";
          return IsValidInfos;
        } else {
          IsValidInfos.ErrorUserSaisi = true;
          return IsValidInfos;
        }
      } catch (error) {
        console.log(error);
      }
    } else if (Phone != null && Phone != undefined) {
      var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (regex.test(Phone)) {
        IsValidInfos.ErrorUserSaisi = true;
        console.log(Phone);
        return IsValidInfos;
      } else {
        IsValidInfos.ErrorValidUserSaisi =
          "Le numéro de téléphone international est invalide";
        return IsValidInfos;
      }
    }
  },
  VerifierUse: function (user, Email, Phone) {
    for (i = 0; i < user.length; i++) {
      if (user[i].Email == Email || user[i].Phone == Phone) {
        console.log("user existe");
      }
    }
  },
};
export default helpers;
