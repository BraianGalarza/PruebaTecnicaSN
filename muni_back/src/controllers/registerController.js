const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateAccessToken } = require("../middlewares/jsonWT");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { uploadFile } = require("../utils/ftp");


dotenv.config();

const userRegister = async (req, res) => {
    try {
        let {
            name,
            lastName,
            date,
            dni,
            email,
            password,
            rol
        } = req.body;

        // Buscar el usuario en la base de datos
        let user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            
            // Registro

            // Verificar si el DNI ya está registrado
            user = await User.findOne({
                where: {
                    dni: dni,
                },
            });

            if (user) {
                // Si el DNI ya está registrado
                return res.status(400).json({
                    error: "El DNI ya está registrado",
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            // Crear nuevo usuario en la base de datos
            usuario = await User.create({
                name,
                lastName,
                date,
                dni,
                email,
                password: hashedPassword,
                stateUser: true,
                rol
            });

        } else if (!req.headers['authorization']) {
                return res.status(400).json({
                    error: "El usuario ya existe.",
                });
        }


        const respuestaUsuario = {
            id: usuario.id,
            name: usuario.name,
            lastName: usuario.lastName,
            date: usuario.date,
            dni: usuario.dni,
            email: usuario.email,
            rol: usuario.rol,
        };

        res.status(200).json(respuestaUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

module.exports = {
    userRegister,
};