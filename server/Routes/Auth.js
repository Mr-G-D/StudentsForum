const express = require("express");
const router = express.Router();
const CollegeController = require("../Controller/CollegeController");
// const UserController = require("../Controller/UserController");

router.route("/getColleges").get(CollegeController.getColleges);
router.route("/getCourses").get(CollegeController.getCourses);
// router.route("/register").post(UserController.register);
// router.route("/login").post(UserController.login);

module.exports = router;
