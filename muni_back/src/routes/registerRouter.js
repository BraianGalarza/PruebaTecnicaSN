const { Router } = require('express');
const { userRegister } = require('../controllers/registerController');

const registerRouter = Router();

registerRouter.post("/register", userRegister);

module.exports = registerRouter;