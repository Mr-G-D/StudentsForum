const express = require("express");
const router = express.Router();
const auth = require("../Middleware/Auth");

const { login, register } = require("../Controller/UserController");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
