//IMPORTANDO MI AUTH
import { FirebaseAuth } from "../../firebase/config";
//IMPORTANDO FUNCIONES DESDE FIREBASE
import { onAuthStateChanged } from "firebase/auth";
//IMPORTANDO OnRegisterUser para empezar registro
import { onRegisterUser } from "../../helpers/userControl";

onAuthStateChanged(FirebaseAuth, (user) => {
  if(user){
      window.location.href = "../../../index.html";
  }
})

const userInput = document.getElementById("name")
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const button = document.getElementById("btn")

button.addEventListener("click", () => {
  let emailValue = emailInput.value
  let passwordValue = passwordInput.value
  let userValue = userInput.value 

  onRegisterUser(emailValue, passwordValue, userValue);

})


