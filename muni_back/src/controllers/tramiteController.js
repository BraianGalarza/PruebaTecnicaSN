const Tramite = require("../models/Tramite");
const User = require("../models/User");
const dotenv = require('dotenv');
const { uploadFile, downloadFile } = require("../utils/ftp");

// ########### Configuración de variables de entorno
dotenv.config();

// ########### Tramite Renovar Carnet
const renovarCarnet = async (req, res) => {
    // ########### req - Objeto de solicitud de Express.
    // ########### res - Objeto de respuesta de Express.
    try {
        let {
            dni,
            idTramite,
            nombreTramite,
            domicilio,
            vista,
            vistaDetalle,
            grupoSanguineo,
            examenPsicofisico,

        } = req.body;
        // ########### Buscar el usuario en la base de datos
        let usuario = await User.findOne({
            where: {
                dni: dni,
            },
        });

        if (!usuario) {
            // ########### Si el usuario no existe devolvemos un 404
            return res.status(404).json({
                error: "No existe un Usuario con ese DNI",
            });

        } else {
            // ########### Verificamos si existe el Archivo adjunto
            if (req.file) {
                try {
                    // ########### Subimos el Archivo adjunto
                    await uploadFile(req, res);
                } catch (error) {
                    // ########### En caso de error
                    console.error("Error al subir el archivo:", error);
                    res.status(500).json({ error: "Error al subir el archivo" });
                    return;  // ########### Detenemos la ejecución si hay un error en la subida del archivo
                }
            }

            // ########### Crear nuevo tramite en la base de datos
            tramiteNuevo = await Tramite.create({
                idTramite,
                nombreTramite,
                domicilio,
                vista,
                vistaDetalle,
                grupoSanguineo,
                examenPsicofisico,
                idUsuario: dni,
                imagenLicencia: "tramitesPDF/" + req.file.originalname,
            });
        }

        // ########### Creamos el objeto de respuesta con el Id Nuevo
        const resTramite = {
            idTramiteNuevo: tramiteNuevo.id
        };
        // ########### Devolvemos un status 200 y el Id del tramite nuevo
        res.status(200).json(resTramite);
    } catch (error) {
        // ########### En caso de error
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

// ########### Descargar archivo del tramite
const downloadFileTramite = async (req, res) => {
    // ########### req - Objeto de solicitud de Express.
    // ########### res - Objeto de respuesta de Express.
    try {
        // ########### Nombre de la imagen guardada
        const { imagenLicencia } = req.body;
        try {
            // ########### Descargamos el Archivo
            await downloadFile(imagenLicencia, res);
        } catch (error) {
            // ########### En caso de error
            console.error("Error al descargar el archivo:", error);
            res.status(500).json({ error: "Error al descargar el archivo" });
            return;  // ########### Detenemos la ejecución si hay un error en la descarga del archivo
        }
    } catch (error) {
        // ########### En caso de error
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


// ########### Cambiar estado y comentario del tramite 
const changeEstateTramite = async (req, res) => {
    // ########### req - Objeto de solicitud de Express.
    // ########### res - Objeto de respuesta de Express.
    try {
        const estado = req.params.estado
        const { id } = req.params;
        const idTramite = req.params.id;
        const comentario = req.params.comentario

        // ########### Buscamos el tramite en la base de datos
        let tramite = await Tramite.findOne({
            where: {
                id: idTramite,
            },
        });

        if (!tramite) {
            // ########### Si no encuentra el tramite
            return res.status(404).json({
                error: "Tramite no encontrado",
            });

        } else {
            if (tramite.estado === estado) {
                // ########### Si el estado es el mismo, solo cambiamos el estado
                const result = await Tramite.update(
                    { comentario: comentario },
                    { where: { id } }
                );

                if (result[0]) {
                    // ########### Devolvemos status 200
                    res.status(200).json({ message: "Estado del tramite cambiado exitosamente" });
                } else {
                    // ########### Devolvemos status 404
                    res.status(404).json({ error: "Tramite no encontrado" });
                }
            } else {
                const result = await Tramite.update(
                    {
                        estado: estado,
                        comentario: comentario
                    },
                    { where: { id } }
                );

                if (result[0]) {
                    console.log(result[0], "si")
                    res.status(200).json({ message: "Estado del tramite cambiado exitosamente" });
                } else {
                    res.status(404).json({ error: "Tramite no encontrado" });
                    console.log(result[0], "no")
                }
            }
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};
const listTramitesByIdUser = async (req, res) => {
    // ########### req - Objeto de solicitud de Express.
    // ########### res - Objeto de respuesta de Express.
    try {
        console.log(req.params, "reqqqqq")
        const idUser = req.params.idUser;
        console.log(idUser, "idUser")


        let tramites = await Tramite.findAll({
            where: {
                idUsuario: idUser,
            },
        });

        if (!tramites) {

            return res.status(404).json({
                error: "No tiene Tramites",
            });

        }

        res.status(200).json(tramites);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

const listTramitesAll = async (req, res) => {
    // ########### req - Objeto de solicitud de Express.
    // ########### res - Objeto de respuesta de Express.
    try {

        let tramites = await Tramite.findAll();

        console.log(tramites)

        if (!tramites) {

            return res.status(404).json({
                error: "No hay Tramites",
            });

        }

        res.status(200).json(tramites);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

module.exports = {
    renovarCarnet,
    changeEstateTramite,
    downloadFileTramite,
    listTramitesByIdUser,
    listTramitesAll
};