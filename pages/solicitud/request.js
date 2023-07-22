import { saveTask } from "../../firebase/config"

const title =  document.getElementById("nombreInput");
const jefe = document.getElementById("jefeInput"); 
const grado = document.getElementById("gradoInput");
const select = document.getElementById("selectInput");
const año = document.getElementById("añoInput");
const gerente = document.getElementById("gerenteInput");
const resumen = document.getElementById("resumenInput");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    let titleValue = title.value;
    let jefeValue = jefe.value;
    let gradoValue = grado.value;
    let selectValue = select.value;
    let selectText  = select.options[select.selectedIndex].text;
    let añoValue = año.value;
    let gerenteValue = gerente.value;
    let resumenValue = resumen.value;

    saveTask(titleValue, jefeValue, gradoValue, selectText, añoValue, gerenteValue, resumenValue);

    
})
