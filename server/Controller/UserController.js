"use strict";
const bcrypt = require("bcryptjs");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

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
  const user = await User.findOne({ email: req.body.emailID });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.APP_SECRET,
    );
    // const status = await bcrypt.compare(req.body.password, user.password);
    res.send(token);
  } else {
    res.send("E-Mail ID not found");
  }
};
