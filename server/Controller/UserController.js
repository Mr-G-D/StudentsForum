"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

exports.register = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.emailID });
  if (user) {
    res.json({ status: "error", error: "Duplicate E-Mail" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailID: req.body.email,
        password: hashedPassword,
        dateOfBirth: req.body.dateOfBirth,
        college: req.body.college,
        course: req.body.course,
        courseBegin: req.body.startDate,
        courseEnd: req.body.endDate,
      });
      newUser.save();
      res.json({ status: "success" });
    } catch (err) {
      res.json({ status: "error", error: err });
    }
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordCorrect = bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.APP_SECRET,
      { expiresIn: "1h" },
    );

    return res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

exports.index = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    res.json({ status: "success", data: user });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Invalid Token" });
  }
};
