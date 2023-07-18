//IMPORTANDO MI AUTH
import { FirebaseAuth } from "../../firebase/config";
//IMPORTANDO OnSignIn para iniciar sesion
import { onSignIn } from "../../helpers/userControl";
//IMPORTANDO FUNCIONESDE FIREBASE
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(FirebaseAuth, (user) => {
    if(user){
        window.location.href = "../../index.html";
    }
})

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    onSignIn(emailValue, passwordValue);
    
    // signInWithEmailAndPassword(FirebaseAuth, emailValue, passwordValue)
    // .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //     window.location.href = "../../index.html"
    // })
})


