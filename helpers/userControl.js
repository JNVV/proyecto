
//IMPORTANDO MI AUTH DE FIREBASE
import { FirebaseAuth } from "../firebase/config";
//IMPORTANDO FUNCIONES DE FIREBASE
import { updateProfile, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";

//FUNCION ASYNC = FUNCION QUE NECESITA UNA RESPUESTA PARA CONTINUAR EL CODIGO
export const onRegisterUser = async (emailValue, passwordValue, userValue) => {

    const respuesta = await createUserWithEmailAndPassword(FirebaseAuth, emailValue, passwordValue)  
    //UNA VEZ TERMINADA LA PETICION (usuario registrado), PROCEDE A ACTUALIZARSE EL USUARIO
    await updateProfile(FirebaseAuth.currentUser, {
        displayName: userValue
    })
    
}

//FUNCION CERRAR SESION

export const onLogOut = async () => {
    await signOut(FirebaseAuth)
    window.location.href = "../../index.html"
} 

//FUNCION LOGIN 
export const onSignIn = async (emailValue, passwordValue) => {
    const response = await signInWithEmailAndPassword(FirebaseAuth, emailValue, passwordValue)
    const user = response.user

    console.log(user);
    window.location.href = "../../index.html"
}



 