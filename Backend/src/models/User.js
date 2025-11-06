const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, required: true, trim: true, minlength: 2 },
    correo: { type: String, required: true, unique: true, lowercase: true, trim: true},
    contraseña: {type: String, required: true},
    fecharegistro: {type: Date, default:Date.now}
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;
