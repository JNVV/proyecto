import { authChecking } from "./src/supabase/actions"

authChecking().then((user) => {
    if (user) {
        if (user.user.id === "71648ed3-198e-4c8c-bc21-40430498a314") {
            window.location.href = "./src/pages/admin/admin.html"
        }else {
            window.location.href = "./src/pages/home/home.html";s
        }
    } else {
        window.location.href = "./src/pages/register/register.html"
    }
})
