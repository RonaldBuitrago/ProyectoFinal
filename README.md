Gran Biblioteca - Sistema Web Completo

Proyecto académico desarrollado con **Angular (frontend)** y **Node.js + Express + MongoDB (backend)**.  
El sistema permite gestionar usuarios, libros y librerías, con autenticación por token y panel de control.

---

Arquitectura del Proyecto

gran-biblioteca/
├── backend/ → API REST con Node.js, Express y MongoDB
└── frontend/ → Interfaz web con Angular 20 y Bootstrap
---

Tecnologías Principales

| Módulo | Tecnologías utilizadas |
|--------|-------------------------|
| **Frontend** | Angular 20, Bootstrap 5, TypeScript, RxJS, RouterModule |
| **Backend** | Node.js, Express.js, Mongoose, MongoDB, JWT, CORS |
| **Base de datos** | MongoDB (local o Atlas) |

---
Requisitos Previos

Antes de iniciar asegúrate de tener instalado:

- [Node.js (v18 o superior)](https://nodejs.org)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Angular CLI](https://angular.io/cli)
- Git (opcional, para clonar el repositorio)

---
Instalación Backend

*(Node.js + Express)
cd backend
npm install
npm init -y
npm i express mongoose bcryptjs jsonwebtoken dotenv cors

*Ejecución

node src/index.js
http://localhost:3000

Estructura Backend

backend/
├── controllers/
│   ├── authController.js
│   ├── librosController.js
│   └── libraryController.js
├── models/
│   ├── user.js
│   ├── libro.js
│   └── library.js
├── routes/
│   ├── authRoutes.js
│   ├── librosRoutes.js
│   └── libraryRoutes.js
├── index.js
└── .env


Instalación Frontend

*Interfaz (Angular 20)
cd frontend
npm install
npm i -g @angular/cli

*Ejecución

ng serve
http://localhost:4200

Estructura Frontend

frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   ├── navbar/
│   │   │   ├── dashboard/
│   │   │   ├── libros/
│   │   │   └── librerias/
│   │   ├── services/
│   │   │   └── api.ts
│   │   └── app-routing.module.ts
│   └── index.html
└── angular.json


Instrucciones Generales de Git

Clonar el repositorio

```bash
git clone https://github.com/RonaldBuitrago/ProyectoFinal.git
cd ProyectoFinal

---

###

Autenticación y Control de Acceso

Al iniciar sesión correctamente se guarda un token JWT en localStorage.

Si el usuario no ha iniciado sesión, las rutas /dashboard, /libros y /librerias permanecen ocultas.

Al cerrar sesión, el token se elimina y el sistema redirige al login.

---

Estilo Visual

Navbar horizontal con Bootstrap 5.

Título “Gran Biblioteca” centrado y estilizado.

Dashboard con resumen de:

Total de usuarios

Total de libros

Total de librerías

Listados de libros y librerías con tablas limpias y botones de acción (Agregar / Actualizar / Eliminar).

---

Flujo de uso del sistema

1. Ejecuta el backend (npm run dev en la carpeta /backend)
2. Ejecuta el frontend (ng serve en /frontend)
3. Abre http://localhost:4200
4. Inicia sesión con un usuario válido.
5. Accede al panel principal (Dashboard) para ver estadísticas.
6. Navega por las secciones Libros y Librerías.

---

Licencia y Créditos

Este proyecto fue desarrollado con fines académicos en el marco de la Especialización en Desarrollo de Software.

Autor: Luis Cano  - Ronald Buitrado
Año: 2025
© Todos los derechos reservados.
