const { Router } = require('express');
const { getUserById, updateUser } = require('../controllers/adminController');

const usuarioRouter = Router();

usuarioRouter.get("/usuario/:id", getUserById);

usuarioRouter.put("/modificar/:id", updateUser);

module.exports = usuarioRouter;