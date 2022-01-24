const express = require("express");
const router = express.Router();
const auth = require("../Middleware/Auth");

const {
  login,
  register,
  fetchUser,
  createAdmin,
} = require("../Controller/UserController");

router.post("/login", login);
router.post("/register", register);

router.get("/fetchUsers", fetchUser);
router.post("/admin/create", createAdmin);

module.exports = router;
