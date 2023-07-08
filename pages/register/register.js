
//IMPORTANDO OnRegisterUser para empezar registro
import { onRegisterUser } from "../../helpers/userControl";


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


