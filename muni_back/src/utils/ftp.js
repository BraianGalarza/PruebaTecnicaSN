const ftp = require("basic-ftp");
const fs = require('fs').promises;

async function connectToFTP() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "127.0.0.1",
            user: "braian",
            password: "braian123",
            port: 21
        });
        return client;
    } catch (error) {
        console.error("Error de conexión ftp: ", error);
        throw error;
    }
}

async function uploadFile(req, res) {
    try {
        const client = await connectToFTP();

        await client.uploadFrom(req.file.path, "/tramitesPDF/" + req.file.originalname);
    } catch (error) {
        console.error("Error al subir el archivo:", error);
        res.status(500).json({ error: "Error al subir el archivo" });
    }
}

const downloadFile = async (imagenLicencia, res) => {
    try {
      // Conectarse al servidor FTP
      const client = await connectToFTP();
  
      // Ruta al archivo que deseas descargar en el servidor FTP
      const remoteFilePath = '/' + imagenLicencia;
      console.log(remoteFilePath);
  
      // Ruta local donde se almacenará el archivo descargado
      const localFilePath = 'D:\\' + imagenLicencia;
  
      // Descargar el archivo y escribirlo en la ruta local
      await client.downloadTo(localFilePath, remoteFilePath);
  
      // Configurar las cabeceras para la descarga del archivo
      res.set({
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename=${remoteFilePath.split('/').pop()}`,
      });
  
      // Leer el contenido del archivo local y enviarlo al cliente
      const archivoContenido = await fs.readFile(localFilePath);
      res.send(archivoContenido);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
      res.status(500).send('Error al descargar el archivo');
    }
  };


  


module.exports = {
    uploadFile,
    connectToFTP,
    downloadFile
};