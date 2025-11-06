const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

const conexionDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/proyecto_final_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB esta conectado');
  } catch (error) {
    console.error('Error con la conexión a la BD', err.message);
    process.exit(1);
  }  
  };

module.exports = conexionDB;