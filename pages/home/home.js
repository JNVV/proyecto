//IMPORTANDO MI AUTH
import { FirebaseAuth } from "../../firebase/config";
//IMPORTANDO FUNCIONES DE FIREBASE
import { onAuthStateChanged } from "firebase/auth";
//IMPORTANDO FUNCION LOG OUT DEL USER CONTROL
import { onLogOut } from "../../helpers/userControl";

onAuthStateChanged(FirebaseAuth, (user) => {
    if(!user){
        window.location.href = "../register/register.html"
    }
})

const button = document.getElementById("btn");
const btnRequest = document.getElementById("btnRequest");

button.addEventListener("click", onLogOut);
btnRequest.addEventListener("click", () => {
    window.location.href="../solicitud/solicitud.html";
})

