const express = require("express");
const router = express.Router();
const auth = require("../Middleware/Auth");

const {
  login,
  register,
  fetchUser,
  createAdmin,
  getUser,
} = require("../Controller/UserController");

router.post("/login", login);
router.post("/register", register);

router.get("/fetchUsers", fetchUser);
router.post("/admin/create", createAdmin);

router.get("/profile/:id", getUser);

module.exports = router;
