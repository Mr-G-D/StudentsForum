const express = require("express");
const router = express.Router();
const auth = require("../Middleware/Auth");

const { login, register, fetchUser } = require("../Controller/UserController");

router.post("/login", login);
router.post("/register", register);

router.get("/fetchUsers", auth, fetchUser);

module.exports = router;
