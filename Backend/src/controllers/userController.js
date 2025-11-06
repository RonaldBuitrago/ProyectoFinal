const Usuario = require('../models/Users');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userController = {
    registrarUsuario: async (req, res) => {
        try {
            const { nombre, correo, contraseña } = req.body;
            const usuarioExistente = await Usuario.findOne({ correo });
            if (usuarioExistente) {
                return res.status(400).json({ mensaje: "El correo ya está registrado" });
            }

            const hashedPassword = await bcrypt.hash(contraseña, 10);
            const nuevoUsuario = new Usuario({ nombre, correo, contraseña: hashedPassword });
            await nuevoUsuario.save();
            res.status(201).json({ mensaje: "Usuario registrado con éxito", usuario: nuevoUsuario });
        } catch (error) {
            // res.status(500).json({ mensaje: "Error al registrar usuario", error });
        console.error("Error al registrar usuario:", error.message);
        res.status(500).json({ mensaje: "Error al registrar usuario", error: error.message });           
        }
    },

    obtenerUsuarios: async (req, res) => {
        try {
            const usuarios = await Usuario.find().select("-contraseña");
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener usuarios", error });
        }
    },

    loginUsuario: async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({ mensaje: "Correo no registrado" });
        }

        const esValido = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!esValido) {
            return res.status(400).json({ mensaje: "Contraseña incorrecta" });
        }

        const token = jwt.sign(
            { id: usuario._id, correo: usuario.correo },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo
            }
        });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ mensaje: "Error al iniciar sesión", error: error.message });
        }
    }
};

module.exports = userController;
