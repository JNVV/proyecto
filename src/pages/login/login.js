//IMPORTANDO FUNCIONES DE SUPABASE
import { authChecking, loginUser } from "../../supabase/actions";

//FUNCION QUE REVISA SI HAY UNA SESION ACTIVA O NO
authChecking().then((user) => {
    if (user) {
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

    loginUser(emailValue, passwordValue)
})


