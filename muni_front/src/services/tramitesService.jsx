import axios from "axios";
import Swal from "sweetalert2";



export const registerUser = (jsonUser, navigateLogin) => {
    axios.post("http://localhost:3030/new/register",
        jsonUser
    ).then((res) => {
        const data = res.data;
        // console.log(res)
        if (data) {
            let timerInterval;
            Swal.fire({
                title: "<p>El usuario fue registrado con éxito</p>",
                html: "Será redirigido en <b></b> segundos.",
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${(Swal.getTimerLeft() / 1000)}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    navigateLogin()
                }
            });
        } else {

            Swal.fire({
                title: "<p>Atención</p>",
                icon: "error",
                text: "Error al registrar el usuario, intentelo nuevamente mas tarde.",
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