const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const CollegeController = require("./Controller/CollegeController");
const authRoutes = require("./Routes/Auth");
const DashboardRoutes = require("./Routes/Dashboard");
const UserRoutes = require("./Routes/Users");

app.use(cors());
app.use(express.json());

const mongo_username = process.env.MONGO_USERNAME;

const mongo_password = process.env.MONGO_PASSWORD;

const port = process.env.PORT;

app.use("/auth", authRoutes);
app.use("/", DashboardRoutes);
app.use("/user", UserRoutes);

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
