import axios from "axios";
import Swal from "sweetalert2";

export const renovarCarnet = (jsonUser) => {
    axios.post("http://localhost:3030/tramite/renovarCarnet",
        jsonUser
    ).then((res) => {
        const data = res.data;
        // console.log(res)
        if (data) {
            Swal.fire({
                title: "<p>Nuevo tramite generado</p>",
                icon: "success",
                text: "Se genero el nuevo tramite correctamente.",
                confirmButtonText: "Aceptar",
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

export const downloadTramite = (file) => {
    axios.post("http://localhost:3030/tramite/download",
        file
    ).then((res) => {
        const data = res.data;
        // console.log(res)
        if (data) {
            Swal.fire({
                title: "<p>Descargado</p>",
                icon: "success",
                confirmButtonText: "Aceptar",
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
export const changeEstateTramite = (data,changeData,setChangeData,closeModal) => {
    axios.get("http://localhost:3030/tramite/update/" + data.id + "/" + data.estado + "/" + data.comentario).then((res) => {
        const data = res.data;
        console.log(res)
        if (data) {
            Swal.fire({
                title: "<p>Se actualizó el tramite</p>",
                icon: "success",
                text: "Tramite actualizado correctamente.",
                confirmButtonText: "Aceptar",
            });
            if (changeData) {
                setChangeData(false)
            } else {
                setChangeData(true)
            }
            closeModal()
        } else {

            Swal.fire({
                title: "<p>Atención</p>",
                icon: "error",
                text: "Error al actualizar el tramite, intentelo nuevamente mas tarde.",
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
export const listTramitesByIdUser = (idUser, setTramites) => {
    axios.get("http://localhost:3030/tramite/" + idUser).then((res) => {
        const data = res.data;
        // console.log(res)
        if (data) {
            setTramites(data)
            // Swal.fire({
            //     title: "<p>Nuevo tramite generado</p>",
            //     icon: "success",
            //     text: "Se genero el nuevo tramite correctamente.",
            //     confirmButtonText: "Aceptar",
            // });
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
export const listTramitesAll = (setTramites) => {
    axios.get("http://localhost:3030/tramite/get/all").then((res) => {
        const data = res.data;
        // console.log(res)
        if (data) {
            setTramites(data)
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