const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CollegesSchema = new Schema({
  CollegeName: {
    type: String,
  },
  GendersAccepted: {
    type: String,
  },
  CampusSize: {
    type: String,
  },
  TotalStudent: {
    type: Number,
  },
  TotalFaculty: {
    type: Number,
  },
  EstablishedYear: {
    type: String,
  },
  Rating: {
    type: String,
  },
  University: {
    type: String,
  },
  Courses: {
    type: Array,
  },
  Facilities: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  Country: {
    type: String,
  },
  CollegeType: {
    type: String,
  },
  AverageFees: {
    type: String,
  },
});

module.exports = mongoose.model("colleges", CollegesSchema);
