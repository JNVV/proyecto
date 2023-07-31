import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { typeErrors } from "./types/typesError";

export const formValidations = (error) => {
    const errorMessage = typeErrors(error)
    console.log(errorMessage)

    Toastify({

        text: errorMessage,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            // ESCOJA LA QUE MAS LE GUSTE
            background: "linear-gradient(to right, #FF0000, #FF6666, #FF9999, #FFCCCC)",
            // background: "linear-gradient(to right, #CC0000, #990000, #660000, #330000)"
            // background: "linear-gradient(45deg, #CC0000, #990000, #660000, #330000)"
            // background: "linear-gradient(to top, #CC0000, #990000, #660000, #330000)"
        },
        onClick: function () {}, // Callback after click
    }).showToast();
};
