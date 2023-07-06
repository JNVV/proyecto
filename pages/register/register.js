
import { FirebaseAuth } from "../../firebase/config";
import { onRegisterUser } from "../../helpers/authentication";
import { onAuthStateChanged } from "firebase/auth";

const userInput = document.getElementById("name")
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const button = document.getElementById("btn")

console.log("Se carga esta html")

button.addEventListener("click", () => {
  let emailValue = emailInput.value
  let passwordValue = passwordInput.value
  let userValue = userInput.value 

  onRegisterUser(emailValue, passwordValue, userValue);
})


