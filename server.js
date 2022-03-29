// Node Server

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.send("Hello World"); //For testing
  //res.sendFile(__dirname + "/index.html"); // To recive from a Form
});

//app.post("/", function(req, res){
//});

app.listen(3000, function() {
});
