import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "./firebase/config"
import { showMessage } from "./helpers/showMessage";

onAuthStateChanged(FirebaseAuth, (user) => {
    if(user){
        window.location.href = "./pages/home/home.html";
    } else {
        window.location.href = "./pages/register/register.html"
    }
})
