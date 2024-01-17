const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateAccessToken } = require("../middlewares/jsonWT");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


dotenv.config();

const userLogin = async (req, res) => {
    try {
        let {
            email,
            password
        } = req.body;

        // Buscar el usuario en la base de datos
        let usuario = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            // Si el usuario no existe
            return res.status(404).json({
                error: "El usuario no existe",
            });

        } else if (!req.headers['authorization']) {
            // Si el usuario existe
            const compare =
                await bcrypt.compare(password, usuario.password);
            if (!compare) {
                return res.status(400).json({
                    error: "Contraseña incorrecta",
                });
            }
        }

        // Generar token de acceso
        const token = generateAccessToken({ email }, "1d");

        const resUser = {
            id: usuario.id,
            name: usuario.name,
            lastName: usuario.lastName,
            date: usuario.date,
            dni: usuario.dni,
            email: usuario.email,
            rol: usuario.rol,
            accessToken: token,
        };

        res.status(200).json(resUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

module.exports = {
    userLogin,
};