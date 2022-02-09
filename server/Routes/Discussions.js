const {
  createTag,
  readTags,
  deleteTag,
} = require("../Controller/DiscussionController");

const express = require("express");
const router = express.Router();

router.post("/create/tag", createTag);

router.get("/tags", readTags);

router.get("/delete/tag", deleteTag);

module.exports = router;
