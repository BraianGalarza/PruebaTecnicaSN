const { DataTypes } = require("sequelize");
const database = require("../database/database");


const User = database.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stateUser: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    rol: {
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
    },
});

module.exports = User;