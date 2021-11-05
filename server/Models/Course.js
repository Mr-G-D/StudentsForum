const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  id: {
    type: Number,
    index: true,
  },
  course: {
    type: String,
  },
});

module.exports = mongoose.model("courses", courseSchema);
