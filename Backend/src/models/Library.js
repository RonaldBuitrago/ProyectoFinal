const mongoose = require("mongoose");
const Schema = mongoose.Schema

const librarySchema = new Schema({
    nombre: { type: String, required: true, trim: true, minlength: 2 },
    direccion: { type: String, required: true, trim: true},
});

const Libreria = mongoose.model("Librerias", librarySchema);
module.exports = Libreria;