const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const USERNAME = "mangar";
const PASSWORD = "mangar9000";
let results = [];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    res.redirect("/admin.html");
  } else {
    res.send("❌ Login failed! Invalid username or password.");
  }
});

app.post("/submit-result", (req, res) => {
  const { number, color, size } = req.body;
  results.push({ number, color, size, time: new Date().toLocaleTimeString() });
  res.redirect("/admin.html");
});

app.get("/get-results", (req, res) => {
  res.json(results);
});

module.exports = app;
