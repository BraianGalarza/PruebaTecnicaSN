const bcrypt = require("bcrypt");
const Tramite = require("../models/Tramite");
const User = require("../models/User");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { uploadFile, downloadFile } = require("../utils/ftp");


dotenv.config();

const renovarCarnet = async (req, res) => {

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
        // Buscar el usuario en la base de datos
        let usuario = await User.findOne({
            where: {
                dni: dni,
            },
        });

        if (!usuario) {
            // Si el usuario no existe
            return res.status(404).json({
                error: "El usuario no existe",
            });

        } else {
            if (req.file) {
                try {
                    await uploadFile(req, res);
                } catch (error) {
                    console.error("Error al subir el archivo:", error);
                    res.status(500).json({ error: "Error al subir el archivo" });
                    return;  // Detenemos la ejecución si hay un error en la subida del archivo
                }
            }
            // Crear nuevo tramite en la base de datos
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

        const resTramite = {
            idTramiteNuevo: tramiteNuevo.id
        };

        res.status(200).json(resTramite);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

const downloadFileTramite = async (req, res) => {
    try {
        const { imagenLicencia } = req.body;

        try {
            console.log(imagenLicencia);
            console.log(req.body);
            await downloadFile(imagenLicencia, res);
        } catch (error) {
            console.error("Error al descargar el archivo:", error);
            res.status(500).json({ error: "Error al descargar el archivo" });
            return;  // Detenemos la ejecución si hay un error en la descarga del archivo
        }

        // No envíes una respuesta aquí ya que ya la enviaste en downloadFile
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};



const changeEstateTramite = async (req, res) => {
    try {
        const estado = req.params.estado
        const { id } = req.params;
        const idTramite = req.params.id;
        const comentario = req.params.comentario


        let tramite = await Tramite.findOne({
            where: {
                id: idTramite,
            },
        });

        if (!tramite) {

            return res.status(404).json({
                error: "Tramite no encontrado",
            });

        } else {

            if (tramite.estado === estado) {
                const result = await Tramite.update(
                    { comentario: comentario },
                    { where: { id } }
                );

                if (result[0]) {
                    console.log(result[0], "si")
                    res.status(200).json({ message: "Estado del tramite cambiado exitosamente" });
                } else {
                    res.status(404).json({ error: "Tramite no encontrado" });
                    console.log(result[0], "no")
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