
import { FirebaseAuth } from "../firebase/config";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

export const onRegisterUser = async (emailValue, passwordValue, userValue) => {

    const respuesta = await createUserWithEmailAndPassword(FirebaseAuth, emailValue, passwordValue)
    await updateProfile(FirebaseAuth.currentUser, {
        displayName: userValue
    })
    window.location.href = "../home/home.html"

//   createUserWithEmailAndPassword(FirebaseAuth, emailValue, passwordValue)
//   .then((user) => {
//     updateProfile(FirebaseAuth.currentUser, {
//       displayName: userValue
//     }).then(() => {
//       console.log(user);
//     })
//   }).catch ((error) =>{
//     console.log(error);
//   })
}

