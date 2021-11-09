
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
    const IsValidEmailOrPhonePassWord = {
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
        IsValidEmailOrPhonePassWord.Minuscule = true;
      }
      var ValidRegexMa = new RegExp("^(?=.*[A-Z])");
      if (ValidRegexMa.test(PassWord)) {
        IsValidEmailOrPhonePassWord.Majuscule = true;
      }
      var ValidRegexNbr = new RegExp("^(?=.*[0-9])");
      if (ValidRegexNbr.test(PassWord)) {
        IsValidEmailOrPhonePassWord.Nombre = true;
      }
      var ValidRegexMdp = new RegExp("^(?=.*[!@#$%^&*])");
      if (ValidRegexMdp.test(PassWord)) {
        IsValidEmailOrPhonePassWord.CaractereSpeciaux = true;
      }
      var ValidRegexLong = new RegExp("^(?=.{8,})");
      if (ValidRegexLong.test(PassWord)) {
        IsValidEmailOrPhonePassWord.Longueur = true;
      }
      return IsValidEmailOrPhonePassWord;
    }
  },

  IsValidUserInfo: function (Email, Phone) {
    const IsValidEmailOrPhone = {
      ErrorUserSaisiEmailOrPhone: false,
      MessageErrorEmailOrPhone: "",
      
    };
    if (Phone === null && Email === null) {
      IsValidEmailOrPhone.MessageErrorEmailOrPhone =
        "Veuillez remplir Email ou le numéro de téléphone";
      return IsValidEmailOrPhone;
    } else if (Email != undefined && Email !=null) {
      const ValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      try {
        if (!ValidRegex.test(Email)) {
          IsValidEmailOrPhone.ErrorUserSaisiEmailOrPhone = false;
          IsValidEmailOrPhone.MessageErrorEmailOrPhone = "Email invalide";
          return IsValidEmailOrPhone;
        } else {
          IsValidEmailOrPhone.ErrorUserSaisiEmailOrPhone = true;
          return IsValidEmailOrPhone;
        }
      } catch (error) {
        console.log(error);
      }
    } else if (Phone != null && Phone != undefined) {
      var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (regex.test(Phone)) {
        IsValidEmailOrPhone.ErrorUserSaisiEmailOrPhone = true;
        console.log(Phone);
        return IsValidEmailOrPhone;
      } else {
        IsValidEmailOrPhone.MessageErrorEmailOrPhone =
          "Le numéro de téléphone international est invalide";
        return IsValidEmailOrPhone;
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
