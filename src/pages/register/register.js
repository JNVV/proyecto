//IMPORTACIONES
import { authChecking, createUser } from "../../supabase/actions";

//CONDICIÓN PARA VERIFICAR LA AUTENTICACIÓN DE LOS USUARIOS
authChecking().then((user) => {
    if (user) {
        window.location.href = "../request/request.html";
    }
});

//OBTENIENDO LOS ELEMENTOS DEL ELEMENTOS DEL FORMULARIO (INPUTS)
const userInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

//BOTON PARA REGISTARSE 
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    //VARIABLES CON LOS VALORES DEL FORMULARIO
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    //FUNCIÓN CREATE USER DEL DOCUMENTO DE JAVASCRIPT "ACTIONS"
    createUser(emailValue, passwordValue);

});
