const { Router } = require('express');
const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');
const registerRouter = require('./registerRouter')
const { authenticateToken } = require('../middlewares/jsonWT');
const loginRouter = require('./loginRouter');
const tramiteRouter = require('./tramiteRouter');


const router = Router();

router.use("/admin", authenticateToken, adminRouter);

router.use("/user", authenticateToken, userRouter);

router.use("/new", registerRouter);

router.use("/tramite", tramiteRouter);

router.use(loginRouter);

module.exports = router;