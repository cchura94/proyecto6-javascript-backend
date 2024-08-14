const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/back_node_js";

const conectarBD = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("CONEXION A MONGODB EXITOSA");
        
    } catch (error) {
        console.log("ERROR AL CONECTAR A MONGODB");

    }
}

module.exports = conectarBD