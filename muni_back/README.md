# Backend Node.js con Express y Sequelize

Backend para un sistema de gestión de trámites, desarrollado con Node.js, Express y Sequelize.

## Requisitos

- Node.js (v12.6.0)
- npm (v6.2.4)
- MySQL

## Instalación

1. Clona el repositorio
2. Ingresa al directorio del proyecto
3. Instala las dependencias: `npm install`
4. Configura las variables de entorno en un archivo `.env`.

## Configuración de Base de Datos

1. Crea una base de datos en MySQL.
2. Configura las variables de entorno para la conexión a la base de datos en el archivo `.env`.

## Uso

1. Inicia el servidor: `npm start`

## Variables de Entorno

- `PORT`: Puerto en el que se ejecutará el servidor (por defecto: 3000).
- `DB_HOST`: Host de la base de datos.
- `DB_HOST_NAME`: Nombre del host de la base de datos.
- `DB_HOST_DIALECT`: Dialecto de la base de datos (MySQL).
- `DB_NAME`: Nombre de la base de datos.
- `DB_MUNI_PASS`: Contraseña específica para la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña de la base de datos.
- `JWT_PASSWORD`: Contraseña secreta para la generación de tokens JWT.
- `FTP_PATH`: Ruta para el almacenamiento de archivos mediante FTP.

## APIs


- Login
$POST \
       --url "http://localhost:3030/login" \
       --body {email,
            password}

- Register
$POST \
       --url 'http://localhost:3030/new/register' \
       --body {name,
            lastName,
            date,
            dni,
            email,
            password,
            rol}

- Nuevo Tramite
$POST \
        --url 'http://localhost:3030/tramite/renovarCarnet' \
        --body {idTramite,
            nombreTramite,
            domicilio,
            vista,
            vistaDetalle,
            grupoSanguineo,
            examenPsicofisico,
            imagenLicencia}

- Descargar Imagen Tramite
$POST \
        --url 'http://localhost:3030/tramite/download' \
        --body { imagenLicencia } 

- Cambiar estado
$GET \
       --url 'http://localhost:3030/tramite//update/:id/:estado/:comentario' \

- Lista de Tramites por Usuario
$GET \
       --url 'http://localhost:3030/tramite/:idUser' \

- Lista de todos los Tramites
$GET \
       --url 'http://localhost:3030/tramite/get/all' \

