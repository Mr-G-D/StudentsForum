const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const test = require("./Models/test");
const fs = require("fs");
const csv = require("csv-parser");
const college = [];

const mongo_username = process.env.MONGO_USERNAME;

const mongo_password = process.env.MONGO_PASSWORD;

const port = process.env.PORT;

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

app.listen(port, async function () {
  await mongoose.connect(
    `mongodb+srv://${mongo_username}:${mongo_password}@miniproject.lobyj.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlparser: true,
    },
  );
  console.log(mongoose.connection.readyState);
  console.log("name");
});
