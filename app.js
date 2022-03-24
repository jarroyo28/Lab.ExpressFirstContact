const express = require("express");
const app = express();
const PORT = 1337;

app.get("/", (req, res, next) => {
  res.send("<h1>This is the home route!!!<h1>");
});

app.get("/puppies", (req, res, next) => {
  res.send("<h1>This is the puppies route!!!<h1>");
});

app.get("/kittens", (req, res, next) => {
  res.send("<h1>This is the kittens route!!!<h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
