const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo 🌎");
});
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto",puerto);
});