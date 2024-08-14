const Producto = require("./../models/Producto");
const Categoria = require("./../models/Categoria");

async function listarProductos(req, res){
    try {
        const productos = await Producto.find();
        return res.json(productos);

    } catch (error) {
        return res.status(500).json({mensaje: "Error al recuperar los datos"});
    }
}

async function guardarProducto(req, res){
    try {

        const producto = new Producto(req.body);
        await producto.save();

        return res.json(producto);

    } catch (error) {
        return res.status(500).json({mensaje: "Error al guardar los datos"});
    }
}

function mostrarProducto(req, res){
    return res.json({mensaje: "Mostrando Producto"});
}

function modificarProducto(req, res){
    return res.json({mensaje: "Modificar Producto"});
}

function eliminarProducto(req, res){
    return res.json({mensaje: "Eliminar Producto"});
}

module.exports = {
    listarProductos,
    guardarProducto,
    mostrarProducto,
    modificarProducto,
    eliminarProducto
}