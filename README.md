# Prueba Técnica Municipalidad de San Nicolás - Sistema de Gestión de Trámites

## 1. Resumen:

Este documento describe la implementación de un sistema de gestión de trámites que incluye funciones de autenticación, registro, tramitación, lista de trámites por usuario, datos personales, área de administración y capacidad de modificar comentarios, estados y descargar archivos de los trámites.

## 2. Introducción:

El propósito de este proyecto es desarrollar un sistema que permita a los usuarios gestionar sus trámites, así como proporcionar a los administradores la capacidad de supervisar y modificar la información asociada a los trámites.

## 3. Alcance del Proyecto:

El sistema incluirá:
- Autenticación de usuarios mediante login.
- Registro de nuevos usuarios.
- Proceso de tramitación de documentos.
- Visualización de la lista de trámites por usuario.
- Gestión de datos personales del usuario.
- Área de administración con la capacidad de modificar comentarios y estados de los trámites.

El sistema no incluirá:
- Integración con sistemas externos.
- Funcionalidades avanzadas de seguridad.

## 4. Requisitos:

### Requisitos Funcionales:
1. **Autenticación y Registro:**
   - Los usuarios deben poder iniciar sesión con email y contraseña.
   - Se debe permitir el registro de nuevos usuarios con información básica.
   
2. **Tramitación:**
   - Los usuarios podrán iniciar nuevos trámites proporcionando información específica.
   - Se deben generar identificadores únicos para cada trámite.

3. **Lista de Trámites por Usuario:**
   - Cada usuario puede ver la lista de trámites asociados a su cuenta.

4. **Datos Personales:**
   - Los usuarios pueden ver su información personal en el sistema.

5. **Área de Administración:**
   - Los administradores podrán ver la lista completa de trámites.
   - Los administradores pueden modificar comentarios y estados de los trámites.

### Requisitos No Funcionales:
1. **Seguridad:**
   - Las contraseñas deben almacenarse de manera segura.
   - Se debe implementar un control de acceso para las funciones administrativas.

2. **Usabilidad:**
   - La interfaz de usuario debe ser intuitiva y fácil de usar.


## 5. Arquitectura del Proyecto:


### Frontend:
1. **Framework de JavaScript:**
   - React.js

2. **Estilización:**
   - Tailwind CSS

### Backend:
1. **Lenguaje de Programación:**
   - Node.js

2. **Framework Web:**
   - Express.js

3. **Base de Datos:**
   - MySQL

4. **ORM (Object-Relational Mapping):**
   - Sequelize

### Almacenamiento de Archivos:
1. **Protocolo FTP:**
   - Se implementará el protocolo FTP para el almacenamiento de archivos relacionados con los trámites
   
### Herramientas Adicionales:
1. **Servidor Local:**
   - XAMPP se utilizará como entorno de desarrollo local para ejecutar el servidor MySQL y proporcionar un servidor web Apache.

2. **Transferencia Segura de Archivos:**
   - WinSCP se utilizará para la transferencia segura de archivos entre el entorno de desarrollo y el servidor de producción.

