import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "./firebase/config"

onAuthStateChanged(FirebaseAuth, (user) => {
    if(user){
        window.location.href = "./pages/home/home.html";
    } else {
        window.location.href = "./pages/register/register.html"
    }
})