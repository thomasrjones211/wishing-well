const express = require("express")
var app = express()
const favicon = require('serve-favicon');
var port = process.env.PORT || 3000;
let wishes = []


app.set("view engine", "hbs")
app.use(express.static("public"));

app.get("/", (req, res) => {
  const title = "Wishing Well"
  res.render("index", {title});
})

app.get("/form", (req, res) => {
  res.render("form", {title: "Cast a coin, make a wish"});
})

app.get("/processForm", (req, res) => {
  console.log(req.query);
  wishes.push(req.query);
  res.render("wishes", {title: "Close your eyes later, and type your wish", wishes});
})

app.get("/reset", (req, res) => {
  wishes = [];
  res.redirect("/")
})

app.listen(port, function() {
  console.log("Start wishing ... on port 3000")
})
