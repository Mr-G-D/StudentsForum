const { createTag, readTags } = require("../Controller/DiscussionController");
const express = require("express");
const router = express.Router();

router.post("/create/tag", createTag);

router.get("/tags", readTags);

module.exports = router;
