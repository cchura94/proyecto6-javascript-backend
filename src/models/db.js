const mongoose = require("mongoose");

const uri = "mongodb+srv://cchuracpc:66y1CH8cJFlEeoDJ@cluster-javascript.cupkk.mongodb.net/back_node_js?retryWrites=true&w=majority&appName=Cluster-javascript";

// const uri = "mongodb://localhost:27017/back_node_js";

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