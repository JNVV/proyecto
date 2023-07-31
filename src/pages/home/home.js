//IMPORTANDO FUNCIONES DE SUPABASE
import { authChecking, logOut } from "../../supabase/actions";

//FUNCION QUE REVISA SI HAY UNA SESION ACTIVA O NO
authChecking().then((user) => {
    if(!user){
        window.location.href = "../../../index.html"
    }
})

//OBTENIENDO LOS BOTONES DEL FORMULARIO
const button = document.getElementById("btn");
const btnRequest = document.getElementById("btnRequest");

//BOTON CERRAR SESIÓN
button.addEventListener("click", logOut);

//BOTON ENVIAR SOLICITUD DE PROYECTO
btnRequest.addEventListener("click", () => {
    window.location.href="../request/request.html";
})

