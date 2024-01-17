import axios from "axios";
import Swal from "sweetalert2";



export const loginUser = (jsonUserLogin, loginTest, setUser) => {
    axios.post("http://localhost:3030/login",
    jsonUserLogin
    ).then((res) => {
        const data = res.data;
        if (data) {
            loginTest(data);
            setUser(data)
        } else {

            Swal.fire({
                title: "<p>Atención</p>",
                icon: "error",
                text: "Error al iniciar sesión, intentelo nuevamente mas tarde.",
                confirmButtonText: "Aceptar",
            });
        }

    })
        .catch((e) => {
            console.log(e, "error")
            const error = (e.response.data.error)
            if (error) {

                Swal.fire({
                    icon: "error",
                    title: "Atención",
                    text: error,
                });
            }
        });
}