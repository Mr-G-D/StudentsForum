const express = require("express");
const app = express();
const mongoose = require("mongoose");

const test = require("./Models/test");
const fs = require("fs");
const csv = require("csv-parser");
const college = [];

app.get("/", (req, res, next) => {
  college.pop();
  fs.createReadStream("./assets/data/colleges.csv")
    .pipe(csv({}))
    .on("data", (data) => {
      college.push(data);
    })
    .on("end", () => {
      res.json(college);
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
