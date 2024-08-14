## Creación de Nuevo Proyecto de Node
- Para arrancar un nuevo Proyecto de Node
```
npm init
```
- Creará un archivo (package.json)

### Configuración de arranque del proyecto de Node
- configurar el archivo package.json
- En (package.json) - en la sección scripts agregar comandos:
```
 "scripts": {
    "dev": "node src/index.js"
  },

```
### Instalar packetes de Node (Express)
```
npm install express
npm i express
```
- Creará una carpeta llamada node_modules en la raiz del proyecto y podra descargar express. agregará una seccion dependences en el archivo (package.json) el packete con la version

### Levantar el Servidor de Node.js con express en (index.js)
```js
const express = require("express");

// arrancar express
const app = express();

// levantar el servidor de Node con express
app.listen(3000, () => {
    console.log("Servidor iniciado en: http://127.0.0.1:3000");
})

```

### Conexion con Base de datos no Relacional (mongoDB - mongoose)
```
npm i mongoose
```
