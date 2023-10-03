//IMPORTANDO FUNCIONES
import { authChecking } from "../../supabase/actions"

//CONDICIÓN PARA VERIFICAR LA AUTENTICACIÓN DE LOS USUARIOS Y REDIRECCIONAMIENTO
authChecking().then((user) => {
  if (user) {
    if (user.user.id === "71648ed3-198e-4c8c-bc21-40430498a314") {
      window.location.href = "../admin/admin.html";
    } else {
      window.location.href = "../request/request.html";
    }
  } else {
    window.location.href = "../register/register.html";
  }
});
