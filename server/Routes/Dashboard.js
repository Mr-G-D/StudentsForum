const express = require("express");
const router = express.Router();
const UserController = require("../Controller/UserController");

router.route("/dashboard").get(UserController.index);

module.exports = router;
