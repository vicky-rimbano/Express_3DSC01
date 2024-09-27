const express = require("express");
const app = express();

const PORT = 3300;

app.get("/", function (req, res) {
  res.sand("Ola!...");
});
app.listen(PORt, () => {
  console.log("running...");
});
