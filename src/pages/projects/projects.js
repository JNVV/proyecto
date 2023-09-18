//IMPORTACIONES
import { authChecking, showTables } from "../../supabase/actions";

//CONDICIÓN PARA VERIFICAR LA AUTENTICACIÓN DE LOS USUARIOS
authChecking().then((user) => {
    if (!user) {
        window.location.href = "../../../index.html"
    }
})

//FUNCION QUE MUESTRA LAS SOLICITUDES APROBADAS EN LA TABLA DE LA PÁGINA
showTables();

//OBTENIENDO EL BOTÓN CON ID "btn" del documento html
const btn = document.getElementById("btn");

//FUNCIONAMIENTO DEL BOTÓN
btn.addEventListener("click", () => {
    window.location.href = "../request/request.html" //Cuando se clickee, envia el usuario a otra pagina
})