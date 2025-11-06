const mongoose = require("mongoose");

const Schema = mongoose.Schema

const bookSchema = new Schema({
    titulo: { type: String, required: true, trim: true, minlength: 2 },
    tema: { type: String, required: true, trim: true},
    autor: {type: String, required: true, trim: true},
    librerias: [{ type: Schema.Types.ObjectId, ref: 'Libreria' }],
    fechabusqueda: {type: Date, default:Date.now}
});

const Libros = mongoose.model("Libros", bookSchema);
module.exports = Libros;
