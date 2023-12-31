//CREANDO EL CLIENTE E IMPORTANDO LIBRERIAS DE SUPABASE

import { createClient } from "@supabase/supabase-js";
import { formValidations } from "../helpers/formValidations";
import { validateEmail } from "../helpers/validationEmail";


const url = "https://zihdqesahqjkczvizvxx.supabase.co";
const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppaGRxZXNhaHFqa2N6dml6dnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1MDM2MDIsImV4cCI6MjAwNjA3OTYwMn0.Sj60xNNFtq7r9yoWNrE-pPZztzZMsaa33WjLlD7QnR0";

export const supabase = createClient(url, apiKey);

//FUNCION PARA CONSULTAR LOS DATOS DE LA TABLA ESPECIALIDADES
export const getDateEsp = async () => {
    const { data, error } = await supabase.from("especialidades").select();

    return data;
}

//FUNCION PARA CONSULTAR LOS DATOS DE LA TABLA GRADOS
export const getDateDegree = async () => {
    const { data, error } = await supabase.from("grados").select();

    return data;
}

//FUNCIÓN QUE GUARDA LOS DATOS DEL FORMULARIO EN LA TABLA FORMS
export const saveTask = async (formValues) => {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const {
        titleValue,
        jefeValue,
        gradoValue,
        espValue,
        añoValue,
        gerenteValue,
        cargoValue,
        resumenValue,
    } = formValues;

    console.log(formValues)

    const { data, error } = await supabase.from("forms").insert({
        userid: user.id,
        title: titleValue,
        author: jefeValue,
        degree: gradoValue,
        specialty: espValue,
        date: añoValue,
        manager: gerenteValue,
        rol: cargoValue,
        resume: resumenValue,

    });

    error && console.log(error);
};

// FUNCION PARA REGISTRAR USUARIOS
export const createUser = async (emailValue = "", passwordValue = "") => {
    if (!emailValue.length > 0 || !(passwordValue.length > 0)) {
        formValidations({
            message: "values cannot be null",
        });

        return;
    } else if (!(passwordValue.length > 6)) {
        formValidations({
            message: "the password is invalid",
        });

        return;
    } else if (!validateEmail(emailValue)) {
        formValidations({
            message: "the email is invalid",
        });

        return;
    } else {
        const { data, error } = await supabase.auth.signUp({
            email: emailValue,
            password: passwordValue,
        });

        window.location.href = "../loading/index.html";
    }
};

// FUNCIÓN QUE VERIFICA EL ESTADO DE LAS SESIONES (REGISTRADO O NO)
export const authChecking = async () => {
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    return session;
};

// FUNCIÓN PARA LOGEAR USUARIOS

export const loginUser = async (emailValue = "", passwordValue = "") => {
    if (!(emailValue.length > 0) || !(passwordValue.length > 0)) {
        formValidations({
            message: "values cannot be null",
        });

        return;

    } else if (!(passwordValue.length > 6)) {
        formValidations({
            message: "the password is invalid",
        });

        return;
    } else if (!validateEmail(emailValue)) {
        formValidations({
            message: "the email is invalid",
        });

        return;
    }

    const { user, error } = await supabase.auth.signInWithPassword({
        email: emailValue,
        password: passwordValue,
    });

    if (error) {
        formValidations({
            message: "Invalid login credentials"

        })
        return;
    }

    window.location.href = "../loading/index.html";
};

// FUNCIÓN CERRAR SESIONES
export const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.href = "../../../index.html";
};

//FUCIONES PARA LA PAGINA DEL ADMINISTRADOR
export const ShowData = async () => {
    //OBTENIENDO LA TABLA DEL DOCUMENTO HTML 
    const tables = document.querySelector("#tableBody");

    //CONSULTA PARA OBTENER LA INFORMACIÓN DE LAS TABLAS FORMS, GRADOS Y ESPECIALIDADES
    const { data, error } = await supabase.from("forms").select(`
        id,
        title,
        grados (
            nombre
        ),
        especialidades (
            nombre
        ),
        userid,
        resume,
        author,
        date, 
        rol,
        manager,
        state
    `).eq(
        "state", false
    )


    if (error) {
        console.log(error)
        return;
    }

    //LIMPIA LA TABLA ANTES DE AGREGAR NUEVOS DATOS
    tableBody.innerHTML = '';

    //RECORRE E INSERTA LOS DATOS EN FILAS DE HTML
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.grados.nombre}</td>
        <td>${item.especialidades.nombre}</td>
        <td>${item.userid}</td>
        <td>${item.resume}</td>
        <td>${item.author}</td>
        <td>${item.date}</td>
        <td>${item.rol}</td>
        <td>${item.manager}</td>
        <td>${item.state ? "APROBADO" : "POR APROBAR"}</td>        
        <td><button class="btn btn-success toggle-button" data-row-id="${item.id}" state="${item.state}">APROBAR   </button></td>
        `;
        tables.appendChild(row);
    });

    //BOTON QUE ALTERA EL VALOR DE LA COLUMNA "STATE" ENTRE "TRUE" O "FALSE" DE LA TABLA FORMS 
    const controlButton = document.querySelectorAll(".toggle-button")
    controlButton.forEach(button => {
        button.addEventListener("click", async () => {
            const rowId = button.getAttribute("data-row-id")
            let stateValue = button.getAttribute("state")

            stateValue = stateValue == "false" ? false : true

            const { data, error } = await supabase
                .from("forms")
                .update({
                    state: !stateValue
                })
                .eq("id", rowId)

            ShowData()
        })
    })


}

//FUNCIÓN QUE MUESTRA LAS SOLICITUDES QUE HAN SIDO APROBADAS A LOS USUARIOS
export const showTables = async () => {

    //OBTENIENDO LA TABLA DEL DOCUMENTO HTML 
    const table = document.querySelector("#tableUsers");

    //CONSULTA PARA OBTENER LA INFORMACIÓN DE LAS TABLAS FORMS, GRADOS Y ESPECIALIDADES
    const { data, error } = await supabase.from("forms").select(`
    title,
    author,
    especialidades (
        nombre
    ),
    resume,
    date,
    manager,
    rol
    `

    ).eq(
        "state", true
    )

    if (error) {
        console.log(error);
        return;
    }

    //LIMPIA LA TABLA ANTES DE AGREGAR NUEVOS DATOS
    table.innerHTML = "";

    // RECORRE E INSERTA LOS DATOS EN FILAS DE HTML
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td>${item.especialidades.nombre}</td>
        <td>${item.resume}</td>
        <td>${item.date}</td>
        <td>${item.manager}</td>
        <td>${item.rol}</td>    
        `
        table.appendChild(row);
    })
}
showTables();


