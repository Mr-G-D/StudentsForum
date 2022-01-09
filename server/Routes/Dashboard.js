const express = require("express");
const router = express.Router();
const { index } = require("../Controller/UserController");
const auth = require("../Middleware/Auth");

router.get("/dashboard", auth, index);

module.exports = router;
