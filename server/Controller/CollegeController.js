"use strict";

const fs = require("fs");
const csv = require("csv-parser");
const Colleges = require("../Models/Colleges");
const Course = require("../Models/Course");

//FETCH
exports.getColleges = (req, res, next) => {
  const data = Colleges.find({}, (err, resu) => {
    res.send(resu);
  }).select("CollegeName");
};

exports.getCourses = async (req, res, next) => {
  let data = [];
  const college = req.query.college;
  if (college != null) {
    const oldVal = await Colleges.find({ CollegeName: college }).select({
      Courses: 1,
      _id: 0,
    });
    let chunk = oldVal[0].Courses;
    if (oldVal[0].Courses.length > 50) {
      chunk = oldVal[0].Courses.slice(0, 50);
    }
    chunk.forEach(async (element) => {
      const newVal = await Course.find({ id: element }).select({
        course: 1,
        _id: 0,
      });
      data.push(newVal[0].course);
      if (chunk[chunk.length - 1] == element) {
        res.send(data);
      }
    });
  }
};
