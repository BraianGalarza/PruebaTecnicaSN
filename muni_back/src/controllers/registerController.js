const bcrypt = require("bcrypt");
const User = require("../models/User");
const dotenv = require('dotenv');

// ########### Configuración de variables de entorno
dotenv.config();

const userRegister = async (req, res) => {
    // ########### req - Objeto de solicitud de Express.
    // ########### res - Objeto de respuesta de Express.
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

        // ########### Buscar por el email en la base de datos
        let user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {

            // ###########  Verificar si el DNI ya está registrado
            user = await User.findOne({
                where: {
                    dni: dni,
                },
            });

            if (user) {
                // ###########  Si el DNI ya está registrado devolvemos un error 400
                return res.status(400).json({
                    error: "El DNI ya está registrado",
                });
            }

            // ########### Iniciamos el Registro

            // ########### Encriptamos la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // ########### Crear nuevo usuario en la base de datos
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

        } else {
            // ########### Si el email esta en uso devolvemos un error 400
            return res.status(400).json({
                error: "El email ya esta en uso.",
            });
        }

        // ########### Objeto de respuesta con los datos del Usuario encontrado 
        const resUser = {
            id: usuario.id,
            name: usuario.name,
            lastName: usuario.lastName,
            date: usuario.date,
            dni: usuario.dni,
            email: usuario.email,
            rol: usuario.rol,
        };
        // ########### Devolvemos un status 200 y el objeto con el Usuario
        res.status(200).json(resUser);
    } catch (error) {
        // ########### En caso de error
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

module.exports = {
    userRegister,
};