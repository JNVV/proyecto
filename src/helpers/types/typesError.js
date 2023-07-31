
export const typeErrors = (error) => {
    console.log(error)

    const errors = {
        password: "La password digitada no es valida",
        valuesNull: "El correo y la contraseña son obligatorios",
        passwordInvalid: "La contraseña debe tener mas de 6 caracteres",
        emailInvalid: "El email no es valido",
        loginInvalid: "El email y/o la contraseña son incorrectos"
    }

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