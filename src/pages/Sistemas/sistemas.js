//IMPORTACIONES
import { authChecking, showTables } from "../../supabase/actions";

//CONDICIÓN PARA VERIFICAR LA AUTENTICACIÓN DE LOS USUARIOS
authChecking().then((user) => {
    if (!user) {
        window.location.href = "../../../index.html"
    }
})
