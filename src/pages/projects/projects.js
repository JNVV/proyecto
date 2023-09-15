//IMPORTANDO FUNCIONES DE SUPABASE
import { authChecking, ShowData } from "../../supabase/actions";

//FUNCION QUE REVISA SI HAY UNA SESION ACTIVA O NO
authChecking().then((user) => {
    if (!user) {
        window.location.href = "../../../index.html"
    }
})

ShowData(true);