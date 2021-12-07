const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();
const CollegeController = require("./Controller/CollegeController");
const authRoutes = require("./Routes/Auth");

app.use(cors());
app.use(session({ secret: "myApp", resave: false, saveUninitialized: false }));

const mongo_username = process.env.MONGO_USERNAME;

const mongo_password = process.env.MONGO_PASSWORD;

const port = process.env.PORT;

app.use("/auth", authRoutes);

app.get("/feedCollege", CollegeController.feedData);
app.get("/feedCourses", CollegeController.feedCourses);
app.get("/setCourses", CollegeController.setCourses);

app.listen(port, async function () {
  await mongoose.connect(
    `mongodb+srv://${mongo_username}:${mongo_password}@miniproject.lobyj.mongodb.net/${process.env.APP_NAME}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlparser: true,
    },
  );
  console.log(mongoose.connection.readyState);
  console.log("Server Started");
});
