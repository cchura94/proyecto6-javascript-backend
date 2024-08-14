const express = require("express")
const Router = express.Router();

const productoController = require("./../controllers/producto.controller")

// endpoints (rutas)
Router.get("/producto", productoController.listarProductos);
Router.post("/producto", productoController.guardarProducto);
Router.get("/producto/:id", productoController.mostrarProducto);
Router.put("/producto/:id", productoController.modificarProducto);
Router.delete("/producto/:id", productoController.eliminarProducto);


module.exports = Router