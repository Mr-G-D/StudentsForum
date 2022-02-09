const { createTag } = require("../Controller/DiscussionController");
const express = require("express");
const router = express.Router();

router.post("/create/tag", createTag);

module.exports = router;
