const express = require("express");
let router = express.Router();
const CollegeController = require("../Controller/CollegeController");

router.route("/getColleges").get(CollegeController.getColleges);

module.exports = router;
