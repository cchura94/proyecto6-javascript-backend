const mongoose = require("mongoose");
const {Schema} = mongoose;

const productoSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    cantidad: {type: Number},
    descripcion: {type: String},
    imagen: {type: String},
    categoria: {type:Schema.ObjectId, ref:'Categoria'}
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
