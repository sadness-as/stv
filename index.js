const express = require("express");
const app = express();

/*app.get("/", (req, res) => {
  res.send("Hola mundo 🌎");
});*/
app.set("view engine","ejs");

// estaticos
app.use(express.static("public"));

app.get("/",(req,res)=>{
	res.render("index",{
		titulo:"WebSite with NodeJS",
		mensaje:"Hi world from Express and EJS 🚀"
	});
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto",puerto);
});