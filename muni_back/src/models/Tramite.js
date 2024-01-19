const { DataTypes } = require("sequelize");
const database = require("../database/database");


const Tramite = database.define("Tramite", {

    idTramite: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vista: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    vistaDetalle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    grupoSanguineo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    examenPsicofisico: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    imagenLicencia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombreTramite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comentario: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.ENUM("Iniciado", "Aprobado","Rechazado"),
        defaultValue: "Iniciado",
    },
});

module.exports = Tramite;