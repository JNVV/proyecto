//IMPORTANDO FUNCIONES DE SUPABASE
import { authChecking, getDateEsp, getDateDegree, saveTask } from "../../supabase/actions";

authChecking().then((user) => {
    if (!user) {
        window.location.href = "../../../index.html";
    }
});


//OBTENIENDO LOS ELEMENTOS DEL ELEMENTOS DEL FORMULARIO (INPUTS, BOTONES, SELECT)
const title = document.getElementById("nombreInput");
const jefe = document.getElementById("jefeInput");
const grado = document.getElementById("selectGrado");
const especialidad = document.getElementById("selectInput");
const año = document.getElementById("añoInput");
const gerente = document.getElementById("gerenteInput");
// const cargo = document.getElementById("cargoInput");
const resumen = document.getElementById("resumenInput");
const button = document.getElementById("btn");

//OBTENIENDO LOS DATOS DE LA TABLA ESPECIALIDADES
getDateEsp().then((dateEsp) => {
    dateEsp.forEach(({id, nombre}) => {
        const option = document.createElement("option")
        option.textContent = nombre;
        option.value = id;

        especialidad.appendChild(option)
    })
})  

getDateDegree().then((dateDegree) => {
    dateDegree.forEach(({id, nombre}) =>{
        const option = document.createElement("option")
        option.textContent = nombre;
        option.value = id;

        grado.appendChild(option)
    })
})


//BOTON ENVIAR FORMULARIO
button.addEventListener("click", () => {
    //VARIABLES CON LOS VALORES DEL FORMULARIO
    let titleValue = title.value;
    let jefeValue = jefe.value;
    let gradoValue = parseInt(grado.options[grado.selectedIndex].value)
    let espValue = parseInt(especialidad.options[especialidad.selectedIndex].value)
    let añoValue = año.value;
    let gerenteValue = gerente.value;
    let resumenValue = resumen.value;

    // FUNCIÓN QUE ALMACENA Y ENVIA LOS DATOS DE LA SOLICITUD A LA BASE DE DATOS
    saveTask({
        titleValue,
        jefeValue,
        gradoValue,
        espValue,
        añoValue,
        gerenteValue,
        resumenValue,
    });

});

