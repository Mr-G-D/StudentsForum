const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(
    "mongodb+srv://Dinesh:DINESH4046@studentforum.lobyj.mongodb.net/StudentForume?retryWrites=true&w=majority",
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.error(err);
  });
