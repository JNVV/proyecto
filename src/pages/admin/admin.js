import { ShowData, authChecking, logOut } from "../../supabase/actions"

authChecking().then((user) => {
    if (!user || user.user.id != "71648ed3-198e-4c8c-bc21-40430498a314") {
        // console.log(authChecking)
        window.location.href = "../../../index.html"
    } else if (user.user.id === "71648ed3-198e-4c8c-bc21-40430498a314") {
        ShowData(false);
        console.log(user);
    }
})

const button = document.getElementById("btn");

button.addEventListener("click", logOut)



