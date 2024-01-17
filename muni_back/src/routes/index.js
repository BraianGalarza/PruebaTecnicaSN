const { Router } = require('express');
const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');
const registerRouter = require('./registerRouter')
const { authenticateToken } = require('../middlewares/jsonWT');


const router = Router();

router.use("/admin", authenticateToken, adminRouter);

router.use("/user", authenticateToken, userRouter);

router.use("/new", registerRouter);

module.exports = router;