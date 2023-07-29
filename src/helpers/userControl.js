
import { showMessage } from "./showMessage";

//FUNCION QUE REGISTRA LOS USUARIOS
export const onRegisterUser = async (emailValue, passwordValue, userValue) => {
    try {
        await createUserWithEmailAndPassword(FirebaseAuth, emailValue, passwordValue)
        //UNA VEZ TERMINADA LA PETICION (usuario registrado), PROCEDE A ACTUALIZARSE EL USUARIO
        await updateProfile(FirebaseAuth.currentUser, { displayName: userValue })
        window.location.href = "../../../index.html"

    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            showMessage("El email ya está en uso", "error");
        } else if (error.code === "auth/invalid-email") {
            showMessage("El correo no es valido", "error");
        } else if (error.code === "auth/weak-password") {
            showMessage("La contraseña es demasiado debil", "error");
        } else if (error.code) {
            showMessage("¡Ups, Algo ha salido mal!", "error");
        }
    }
}

//FUNCION CERRAR SESION

export const onLogOut = async () => {
    await signOut(FirebaseAuth)
    window.location.href = "../../../index.html"
}

//FUNCION LOGIN 

export const onSignIn = async (emailValue, passwordValue) => {
    try {
        const response = await signInWithEmailAndPassword(FirebaseAuth, emailValue, passwordValue)
        const user = response.user

        window.location.href = "../../../index.html"
    } catch (error) {
        if (error.code == "auth/user-not-found") {
            showMessage("Este correo no se encuentra registrado", "error");
        } else if (error.code === "auth/wrong-password") {
            showMessage("Contraseña incorrecta", "error");
        } else if (error.code) {
            showMessage("¡Ups, algo ha salido mal!", "error");
        }
    }

}



