const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  discussion_id: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("comments", commentSchema);
