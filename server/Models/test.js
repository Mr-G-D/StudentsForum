const express = require("express");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const testing = new schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("testings", testing);
