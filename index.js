const express = require("express");
const app = express();
const crud = require("./public/crud");

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

app.get("/rankings", function (req,res){
  res.sendFile(path.join(__dirname, "./public/ranking.html"));
})

app.post("/", async (req, res) => {
  console.log(req.body)
  await crud.criar("Players", undefined, req.body);
})
  
app.listen(3000, () => {
    console.log('App funcionando na porta 3000')
});