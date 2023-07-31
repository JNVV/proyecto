import { authChecking } from "./src/supabase/actions"

authChecking().then((user) => {
    if(user) {
        window.location.href = "./src/pages/home/home.html";
    } else {
        window.location.href = "./src/pages/register/register.html"
    }
})
