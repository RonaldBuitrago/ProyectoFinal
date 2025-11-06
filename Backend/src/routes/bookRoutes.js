const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");
const auth = require("../middlewares/auth.middleware");


router.get("/", booksController.obtenerLibros);
router.post("/", booksController.crearLibro);
router.get("/:id", booksController.obtenerLibro);
router.put("/:id", booksController.actualizarLibro);
router.delete("/:id", booksController.eliminarLibro);

module.exports = router;
