//IMPORTACIONES
import { authChecking, showTables, logOut} from "../../supabase/actions";

//FUNCION QUE MUESTRA LAS SOLICITUDES APROBADAS EN LA TABLA DE LA PÁGINA
showTables();

//OBTENIENDO LOS BOTONES
const btn = document.getElementById("btn");
const btnAdmin = document.getElementById("btnAdmin");
const btnLogOut = document.getElementById("btnCerrarSesion")

//FUNCIONAMIENTO DE LOS BOTONES
btn.addEventListener("click", () => {
  window.location.href = "../loading/index.html"; //cunado se clickea redirecciona al usuario a otra pagina
});

//CONDICIÓN PARA VERIFICAR LA AUTENTICACIÓN DE LOS USUARIOS
authChecking().then((user) => {
    if (user){
        btnLogOut.style.display = "block";
    }else{
        btnLogOut.style.display = "none"
    }
});

//BOTON PARA CERRAR SESIÓN 
btnLogOut.addEventListener("click", logOut);
