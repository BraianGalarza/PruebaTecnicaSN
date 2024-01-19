const { Router } = require('express');
const { renovarCarnet, changeEstateTramite, downloadFileTramite, listTramitesByIdUser, listTramitesAll } = require('../controllers/tramiteController');

const tramiteRouter = Router();
const multer = require('multer');
const upload = multer({ dest: '/tramitesPDF' });


tramiteRouter.get("/update/:id/:estado/:comentario", changeEstateTramite);

tramiteRouter.post("/renovarCarnet", upload.single('imagenLicencia'), renovarCarnet);

tramiteRouter.post("/download", downloadFileTramite);

tramiteRouter.get("/:idUser", listTramitesByIdUser);

tramiteRouter.get("/get/all", listTramitesAll);

module.exports = tramiteRouter;