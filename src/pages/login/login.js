//IMPORTACIONES
import { authChecking, loginUser } from "../../supabase/actions";

//CONDICIÓN PARA VERIFICAR LA AUTENTICACIÓN DE LOS USUARIOS
authChecking().then((user) => {
    if (user) {
        // console.log(authChecking)
        window.location.href = "../../../index.html"
    }
})

//OBTENIENDO LOS ELEMENTOS DEL ELEMENTOS DEL FORMULARIO (INPUTS)
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

//BOTÓN INICAR SESIÓN
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    //VARIABLES CON LOS VALORES DEL FORMULARIO
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    //FUNCIÓN LOGIN USER DEL DOCUMENTO DE JAVASCRIPT "ACTIONS"
    loginUser(emailValue, passwordValue)
})


