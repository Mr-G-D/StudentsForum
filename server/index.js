const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const HomeController = require("./Controller/HomeController");
const authRoutes = require("./Routes/Auth");
const UserRoutes = require("./Routes/Users");

app.use(cors());
app.use(express.json());

const mongo_username = process.env.MONGO_USERNAME;

const mongo_password = process.env.MONGO_PASSWORD;

const port = process.env.PORT;

app.use("/auth", authRoutes);
app.use("/users", UserRoutes);

// app.get("/feedCollege", HomeController.feedData);
// app.get("/feedCourses", HomeController.feedCourses);
// app.get("/setCourses", HomeController.setCourses);
// app.get("/feedUsers", HomeController.feedUsers);
// app.get("/deleteUsers", HomeController.deleteUsers);

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
