const {
  createTag,
  readTags,
  deleteTag,
  submitDiscussion,
  getDiscussion,
  getDiscussions,
  createComment,
  getComments,
} = require("../Controller/DiscussionController");

const express = require("express");
const router = express.Router();

router.post("/create/tag", createTag);

router.get("/tags", readTags);

router.get("/delete/tag", deleteTag);

router.post("/create", submitDiscussion);

router.get("/getDiscussions", getDiscussions);

router.get("/getdiscussion", getDiscussion);

router.post("/createComment", createComment);

router.get("/getComments", getComments);

module.exports = router;
