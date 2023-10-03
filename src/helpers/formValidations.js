//TOASTFY ES UNA LIBRERIA QUE PERMITE CREAR NOTIFIACIONES CON ESTILOS PREDETERMINADOS

//IMPORTANDO TOASTIFY
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

//IMPORTNADO LA VALIDACIÓN DE LOS ERRORES
import { typeErrors } from "./types/typesError";


//FUNCIÓN PARA MANEJAR LOS DISTINTOS TIPOS DE MENSAJE SEGÚN EL ERROR QUE SE PRESENTA 
export const formValidations = (error) => {
    const errorMessage = typeErrors(error)
    console.log(errorMessage) 

    //ESTILOS DEL TOASTIFY
    Toastify({

        text: errorMessage,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #CC0000, #990000, #660000, #330000)"
        },
        onClick: function () { }, 
    }).showToast();
};
