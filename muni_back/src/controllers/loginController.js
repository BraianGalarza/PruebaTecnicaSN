const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateAccessToken } = require("../middlewares/jsonWT");
const dotenv = require('dotenv');

// ########### Configuración de variables de entorno
dotenv.config();

const userLogin = async (req, res) => {
    
// ########### req - Objeto de solicitud de Express.
// ########### res - Objeto de respuesta de Express.
    
    try {
        let {
            email,
            password
        } = req.body;

        // ########### Buscar el usuario en la base de datos mediante el email ingresado.
        let usuario = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!usuario) {
            // ###########  Si el usuario no existe devolvemos erro 404
            return res.status(404).json({
                error: "El usuario no existe",
            });

        } else if (!req.headers['authorization']) {
            // ###########  Si el usuario existe comparamos las contraseñas
            const compare =
                await bcrypt.compare(password, usuario.password);
            if (!compare) {
                // ########### Si no son iguales devolvemos error 400
                return res.status(400).json({
                    error: "Contraseña incorrecta",
                });
            }
        }

        // ###########  Generar token de acceso
        const token = generateAccessToken({ email }, "1d");

        // ########### Objeto de respuesta con los datos del Usuario
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
        // ########### Devolvemos un status 200 junto con el objeto de respuesta
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
    userLogin,
};