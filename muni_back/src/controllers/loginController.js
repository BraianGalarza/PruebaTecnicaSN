const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateAccessToken } = require("../middlewares/jsonWT");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { uploadFile } = require("../utils/ftp");


dotenv.config();

const sso = async (req, res) => {
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

        // Validación de campos obligatorios
        if (!email || !password) {
            // Si falta información, intentamos obtenerla del token en el encabezado
            if (!req.headers['authorization']) {
                return res.status(400).json({
                    error: "Campos obligatorios incompletos",
                });
            } else {
                const authHeader = req.headers['authorization'];
                const token = authHeader && authHeader.split(' ')[1];
                const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
                email = decoded.email;
            }
        }

        // Buscar el usuario en la base de datos
        let usuario = await User.findOne({
            where: {
                email: email,
            },
        });

        let usuarioNuevo = false;

        if (!usuario) {
            // Si el usuario no existe, procedemos a registrarlo
            if (!name || !lastName || !date || !dni || !password) {
                return res.status(400).json({
                    error: "Campos obligatorios incompletos",
                });
            }

            // Verificar si el DNI ya está registrado
            usuario = await User.findOne({
                where: {
                    dni: dni,
                },
            });

            if (usuario) {
                // Si el DNI ya está registrado, devuelve un error
                return res.status(400).json({
                    error: "El DNI ya está registrado",
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            // Subir archivo si está presente en la solicitud
            if (req.file) {
                try {
                    await uploadFile(req, res);
                } catch (error) {
                    console.error("Error al subir el archivo:", error);
                    res.status(500).json({ error: "Error al subir el archivo" });
                    return;  // Detenemos la ejecución si hay un error en la subida del archivo
                }
            }

            // Crear nuevo usuario en la base de datos
            usuario = await User.create({
                name,
                lastName,
                date,
                dni,
                email: email,
                password: hashedPassword,
                fotoPerfil: req.file ? "fotos/" + req.file.originalname : "",
                rol
            });

            usuarioNuevo = true;
        } else if (!req.headers['authorization']) {
            // Si el usuario existe, comparamos las contraseñas
            const compare =
                usuario.password === null && usuario.created_in_google === true
                    ? true
                    : await bcrypt.compare(password, usuario.password);

            if (!compare) {
                return res.status(400).send("contraseña incorrecta");
            }
        }

        // Generar tokens de acceso y actualización
        const token = generateAccessToken({ email: req.body.email }, "1d");
        const refreshToken = generateAccessToken({ email: req.body.email }, "1d");

        // Construir el objeto de respuesta sin incluir la contraseña
        const respuestaUsuario = {
            id: usuario.id,
            name: usuario.name,
            lastName: usuario.lastName,
            date: usuario.date,
            dni: usuario.dni,
            email: usuario.email,
            fotoPerfil: usuario.fotoPerfil,
            rol: usuario.rol,
            usuarioNuevo: usuarioNuevo,
            accessToken: token,
            refreshToken: refreshToken,
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
    sso,
};