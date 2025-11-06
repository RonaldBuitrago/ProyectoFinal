const Libreria = require("../models/library");

const libraryController = {
    obtenerLibrerias: async (req, res) => {
        try {
            const librerias = await Libreria.find();
            res.status(200).json(librerias);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener librerías", error });
        }
    },

    crearLibreria: async (req, res) => {
        try {
            const nuevaLibreria = new Libreria(req.body);
            await nuevaLibreria.save();
            res.status(201).json({ mensaje: "Librería creada con éxito", libreria: nuevaLibreria });
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear librería", error });
        }
    }
};

module.exports = libraryController;
