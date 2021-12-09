"use strict";
const User = require("../Models/User");

exports.register = async (req, res, next) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.body.emailID });
  if (user) {
    res.json({ status: "error", error: "Duplicate E-Mail" });
  } else {
    try {
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailID: req.body.email,
        password: req.body.password,
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
