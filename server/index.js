const express = require("express");
const app = express();
const mongoose = require("mongoose");

const test = require("./Models/test");

app.get("/", (req, res, next) => {
  test.find().then((test) => {
    console.log(test);
    res.json(test);
  });
});

app.listen(3001, async function () {
  await mongoose.connect(
    "mongodb+srv://Dinesh:DINESH4046@miniproject.lobyj.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlparser: true,
    },
  );
  console.log(mongoose.connection.readyState);
  console.log("server running");
});
