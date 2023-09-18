//FUNCION PARA VALIDAR LOS ERRORES DEL REGISTRO E INICIO DE SESIÓN DE LOS USUARIOS
export const typeErrors = (error) => {
    console.log(error)

    //MENSAJES QUE DEBE MOSTRAR EL SITIO WEB SEGÚN EL ERROR QUE RECIBA
    const errors = {
        password: "La password digitada no es valida",
        valuesNull: "El correo y la contraseña son obligatorios",
        passwordInvalid: "La contraseña debe tener mas de 6 caracteres",
        emailInvalid: "El email no es valido",
        loginInvalid: "El email y/o la contraseña son incorrectos"
    }

    //CONDICIÓN PARA DETERMINAR EL TIPO DE ERROR QUE SE ESTÁ PRESENTANDO
    if (error.message.includes("requires a valid password")) {
        return errors.password
    }

    if (error.message.includes("values cannot be null")) {
        return errors.valuesNull
    }

    if (error.message.includes("the password is invalid")) {
        return errors.passwordInvalid
    }

    if (error.message.includes("the email is invalid")) {
        return errors.emailInvalid
    }

    if(error.message.includes("Invalid login credentials")){
        return errors.loginInvalid
    }

}   