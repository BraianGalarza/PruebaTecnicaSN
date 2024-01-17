const bcrypt = require("bcrypt");
const User = require("../models/User");

const getUsers = async (req, res) => {
    try {
        
        const Users = await User.findAll();

        res.json(Users);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

const getUserById =  async (req, res) => {
    const id = req.params.id;
    const usuario = await User.findByPk(id);
    res.json(usuario);
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            lastName,
            fechaNacimiento,
            dni,
            email,
            contrasena,
            fotoPerfil,
            rol
        } = req.body;

        // Validación de campos obligatorios
        if (!nombre || !apellido || !fechaNacimiento || !dni || !email) {
            return res.status(400).json({
                error: "Campos obligatorios incompletos",
            });
        }

        let hashedPassword;
        if (contrasena) {
            hashedPassword = await bcrypt.hash(contrasena, 10);
        }

        // Actualización de usuario en la base de datos
        const result = await User.update(
            {
                nombre,
                apellido,
                fechaNacimiento,
                dni,
                email,
                contrasena: hashedPassword,
                fotoPerfil,
                rol
            },
            {
                where: { id },
            }
        );

        if (result[0]) {
            res.status(200).json({ message: "Usuario modificado exitosamente" });
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

const disableUser = async (req, res) => {
    try {
        const { id } = req.params;
        // Desactivar el usuario en la base de datos
        const result = await Usuario.update(
            { activo: false },
            { where: { id } }
        );

        if (result[0]) {
            res.status(200).json({ message: "Usuario desactivado exitosamente" });
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

const enableUser = async (req, res) => {
    try {
        const { id } = req.params;
        // Activar el usuario en la base de datos
        const result = await User.update(
            { activo: true },
            { where: { id } }
        );

        if (result[0]) {
            res.status(200).json({ message: "Usuario activado exitosamente" });
        } else {
            res.status(404).json({ error: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error interno del servidor",
        });
    }
};

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    disableUser,
    enableUser
};