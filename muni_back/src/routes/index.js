const { Router } = require('express');
const registerRouter = require('./registerRouter')
const loginRouter = require('./loginRouter');
const tramiteRouter = require('./tramiteRouter');


const router = Router();

router.use("/new", registerRouter);

router.use("/tramite", tramiteRouter);

router.use(loginRouter);

module.exports = router;