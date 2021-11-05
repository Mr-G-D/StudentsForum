const express = require("express");
let router = express.Router();
const CollegeController = require("../Controller/CollegeController");

router.route("/getColleges").get(CollegeController.getColleges);
router.route("/getCourses").get(CollegeController.getCourses);

module.exports = router;
