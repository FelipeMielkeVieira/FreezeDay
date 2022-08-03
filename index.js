const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
})

app.get("/niveis", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/nivel.html"));
})

app.get("/rankings", function (req,res){
  res.sendFile(path.join(__dirname, "./public/ranking.html"));
})
  
app.listen(3000, () => {
    console.log('App funcionando na porta 3000')
});