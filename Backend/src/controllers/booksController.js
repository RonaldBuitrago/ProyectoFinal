const Libros = require("../models/books");

const booksController = {
    obtenerLibros: async (req, res) => {
        try {
            const libros = await Libros.find();
            res.status(200).json(libros);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los libros", error });
        }
    },

    crearLibro: async (req, res) => {
        try {
            const nuevoLibro = new Libros(req.body);
            await nuevoLibro.save();
            res.status(201).json({ mensaje: "Libro creado con éxito", libro: nuevoLibro });
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear el libro", error });
        }
    },

    obtenerLibro: async (req, res) => {
        try {
            const libro = await Libros.findById(req.params.id);
            if (!libro) {
            return res.status(404).json({ mensaje: "Libro no encontrado" });
            }
            res.status(200).json(libro);
        } catch (error) {
            console.error("Error al obtener libro:", error);
            res.status(500).json({ mensaje: "Error al obtener el libro", error: error.message });
        }
    },

    actualizarLibro: async (req, res) => {
        try {
            const libro = await Libros.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!libro) return res.status(404).json({ mensaje: "Libro no encontrado" });
            res.json({ mensaje: "Libro actualizado", libro });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al actualizar libro", error });
        }
    },

    eliminarLibro: async (req, res) => {
        try {
            await Libros.findByIdAndDelete(req.params.id);
            res.status(200).json({ mensaje: "Libro eliminado con éxito" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar el libro", error });
        }
    }
};

module.exports = booksController;