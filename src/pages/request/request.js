//IMPORTANDO FUNCIONES DE SUPABASE
import { authChecking, dataTable, saveTask } from "../../supabase/actions";

authChecking().then((user) => {
    if (!user) {
        window.location.href = "../../../index.html";
    }
});

//OBTENIENDO LOS ELEMENTOS DEL ELEMENTOS DEL FORMULARIO (INPUTS, BOTONES, SELECT)
const title = document.getElementById("nombreInput");
const jefe = document.getElementById("jefeInput");
const grado = document.getElementById("gradoInput");
const select = document.getElementById("selectInput");
const año = document.getElementById("añoInput");
const gerente = document.getElementById("gerenteInput");
const resumen = document.getElementById("resumenInput");
const button = document.getElementById("btn");

//BOTON ENVIAR FORMULARIO
button.addEventListener("click", () => {
    dataTable();
    // //VARIABLES CON LOS VALORES DEL FORMULARIO
    // let titleValue = title.value;
    // let jefeValue = jefe.value;
    // let gradoValue = grado.value;
    // let selectValue = select.value;
    // let selectText = select.options[select.selectedIndex].text;
    // let añoValue = año.value;
    // let gerenteValue = gerente.value;
    // let resumenValue = resumen.value;

    // //FUNCIÓN QUE ALMACENA Y ENVIA LOS DATOS DE LA SOLICITUD A LA BASE DE DATOS
    // saveTask({
    //     titleValue,
    //     jefeValue,
    //     gradoValue,
    //     selectText,
    //     añoValue,
    //     gerenteValue,
    //     resumenValue,
    // });
});
