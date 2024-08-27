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

async function mostrarProducto(req, res){

    try {
        const {id} = req.params;
        const producto = await Producto.findById(id)
    } catch (error) {
        
        return res.json({mensaje: "Error al mostrar Producto"});
    }

}

async function modificarProducto(req, res){
    try {
        const {id} = req.params;
        const body = req.body
        const producto = await Producto.findByIdAndUpdate(id, body, {new: true})
        return res.json({mensaje: "Eliminar actualizado"});

    } catch (error) {
        
        return res.json({mensaje: "Error al mostrar Producto"});
    }
}

async function eliminarProducto(req, res){
    try {
        const {id} = req.params;
        const producto = await Producto.findByIdAndDelete(id)
        return res.json({mensaje: "Producto eliminado"});

    } catch (error) {
        
        return res.json({mensaje: "Error al mostrar Producto"});
    }
}

module.exports = {
    listarProductos,
    guardarProducto,
    mostrarProducto,
    modificarProducto,
    eliminarProducto
}