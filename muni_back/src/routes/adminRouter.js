const { Router } = require('express');
const { getUsers, disableUser, enableUser } = require('../controllers/adminController');


const usRouter = Router();


usRouter.get("/usuarios", getUsers);

usRouter.put('/desactivar/:id', disableUser);

usRouter.put('/activar/:id', enableUser);

module.exports = usRouter;