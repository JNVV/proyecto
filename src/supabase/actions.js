//CREEANDO EL CLIENTE DE SUPABASE
import { createClient } from "@supabase/supabase-js";
import { formValidations } from "../helpers/formValidations";
import { validateEmail } from "../helpers/validationEmail";

const url = "https://zihdqesahqjkczvizvxx.supabase.co";
const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppaGRxZXNhaHFqa2N6dml6dnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1MDM2MDIsImV4cCI6MjAwNjA3OTYwMn0.Sj60xNNFtq7r9yoWNrE-pPZztzZMsaa33WjLlD7QnR0";

export const supabase = createClient(url, apiKey);

//FUNCIÓN QUE GUARDA LOS DATOS DEL FORMULARIO EN LA TABLA FORMS
export const saveTask = async (formValues) => {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const {
        titleValue,
        jefeValue,
        gradoValue,
        selectText,
        añoValue,
        gerenteValue,
        resumenValue,
    } = formValues;
    const {} = await supabase.from("forms").insert({
        title: titleValue,
        created_by: user.id,
        degree: gradoValue,
        specialty: selectText,
        year: añoValue,
        manager: gerenteValue,
        resume: resumenValue,
    });

    console.log(user);
};

//REGISTRAR USUARIOS
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

        window.location.href = "../../../index.html";
    }
};

//ESTADO DE LAS SESIONES (REGISTRADO O NO)
export const authChecking = async () => {
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();
    console.log(session, error);

    return session;
};

//LOGEAR USUARIOS

export const loginUser = async (emailValue, passwordValue) => {
    try {
        const { user, error } = await supabase.auth.signInWithPassword({
            email: emailValue,
            password: passwordValue,
        });

        window.location.href = "../../../index.html";
    } catch (error) {
        console.log(error);
    }
};

//CERRAR SESIONES
export const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.href = "../../../index.html";
};
