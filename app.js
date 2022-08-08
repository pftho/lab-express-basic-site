const express = require("express");
const app = express();

//Make everything inside of public/ available
app.use(express.static("public"));

//Define all the routes for our pages
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

// server started and listening to the 3000 port

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
