const crud = require("./public/crud/index.js")

const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
})

app.get("/db", async (req, res) => {
  res.json(await crud.buscar("jogadores"));
});

app.get("/mundo1", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/niveis/mundo1.html"));
});

app.get("/mundo2", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/niveis/mundo2.html"));
});

app.post("/", async (req, res) => {
  console.log("aaa ", req.body);
  res.json(await crud.criar("jogadores", null, req.body));
})

app.get("/rankings", function (req,res){
  res.sendFile(path.join(__dirname, "./public/ranking.html"));
})
  
app.listen(3000, () => {
    console.log('App funcionando na porta 3000')
});