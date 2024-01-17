const { Router } = require('express');
const { userLogin } = require('../controllers/loginController');

const loginRouter = Router();

loginRouter.post("/login", userLogin);

module.exports = loginRouter;