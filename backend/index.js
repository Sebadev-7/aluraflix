// index.js

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Asegúrate de que db.json exista en la raíz
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

// Habilitar CORS (json-server ya lo hace por defecto)
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server está corriendo en el puerto ${port}`);
});
