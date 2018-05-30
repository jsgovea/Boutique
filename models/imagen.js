const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const imagenSchema = new mongoose.Schema({
    titulo: {},
    descripcion: {},
    precio: {},
    urlImage: {},
    cantidad:{}
});