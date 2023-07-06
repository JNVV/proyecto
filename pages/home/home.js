import { FirebaseAuth} from "../../firebase/config"
import { signOut } from "firebase/auth"

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    signOut(FirebaseAuth).then (() => {
        console.log("Cierre de sesion exitos");
        window.location.href = "../../index.html"
    })

})

