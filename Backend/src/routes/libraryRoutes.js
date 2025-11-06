const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/libraryController");

router.get("/", libraryController.obtenerLibrerias);
router.post("/", libraryController.crearLibreria);

module.exports = router;
