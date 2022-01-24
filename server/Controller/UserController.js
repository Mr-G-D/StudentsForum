"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const axios = require("axios");
const Colleges = require("../Models/Colleges");
const Course = require("../Models/Course");

exports.register = async (req, res, next) => {
  try {
    const user = await User.findOne({ emailID: req.body.formData.email });
    if (user) {
      return res.json({ message: "error", error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.formData.password, 12);
    const newUser = await User.create({
      firstName: req.body.formData.firstName,
      lastName: req.body.formData.lastName,
      emailID: req.body.formData.email,
      password: hashedPassword,
      dateOfBirth: req.body.dob,
      college: req.body.college,
      course: req.body.course,
      courseBegin: req.body.start,
      courseEnd: req.body.end,
      admin: req.body.formData.admin,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.APP_SECRET,
    );
    newUser.save();
    res.json({ result: newUser, token: token, message: "success" });
  } catch (error) {
    res.json({ message: "Something went wrong", error: error });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ emailID: email });

    if (!user) {
      return res.json({ message: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.APP_SECRET,
    );

    return res.json({ result: user, token: token, message: "success" });
  } catch (error) {
    res.json("Something went wrong");
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

exports.fetchUser = async (req, res) => {
  const type = req.query.type;
  const response = await User.find({ admin: type }).select({
    _id: 0,
  });
  res.json(response);
};
