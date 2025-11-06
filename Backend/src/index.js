require("dotenv").config();
const express = require("express");
const cors = require("cors");
const conexionDB = require("./config/db");


// Rutas
const booksRoutes = require("./routes/booksRoutes");
const libraryRoutes = require("./routes/libraryRoutes");
const userRoutes = require("./routes/userRoutes");

console.log(" Rutas cargadas correctamente:", {
  libros: typeof booksRoutes,
  librerias: typeof libraryRoutes,
  usuarios: typeof userRoutes
});

const app = express();

// Conexión a la base de datos
conexionDB();

// Middlewares
app.use(cors());
app.use(express.json()); 

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Rutas base
app.use("/api/libros", booksRoutes);
app.use("/api/librerias", libraryRoutes);
app.use("/api/usuarios", userRoutes);

// Servidor
const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});