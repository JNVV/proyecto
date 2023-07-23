import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "./src/firebase/config"

onAuthStateChanged(FirebaseAuth, (user) => {
    if(user){
        window.location.href = "./src/pages/home/home.html";
    } else {
        window.location.href = "./src/pages/register/register.html"
    }
})
