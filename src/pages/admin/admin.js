//IMPORTACIONES 
import { ShowData, authChecking, logOut } from "../../supabase/actions"

//CONDICIÓN PARA VERIFICAR LA AUTENTICACIÓN DE LOS USUARIOS
authChecking().then((user) => {
    if (!user || user.user.id != "71648ed3-198e-4c8c-bc21-40430498a314") {
        // console.log(authChecking)
        window.location.href = "../../../index.html"
    } else if (user.user.id === "71648ed3-198e-4c8c-bc21-40430498a314") {
        ShowData(); //FUNCIÓN QUE MUESTRA LAS SOLICITUDES QUE NO HAN SIDO APROBADAS EN LA TABLA 
        console.log(user);
    }
})

//OBTENIENDO EL BOTÓN CON ID "btn" del documento html
const button = document.getElementById("btn");

//FUNCIONAMIENTO DEL BOTÓN
button.addEventListener("click", logOut)



