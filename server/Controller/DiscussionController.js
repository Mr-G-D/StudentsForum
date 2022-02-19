const Discussion = require("../Models/Discussion");
const Tag = require("../Models/Tag");

exports.createTag = async (req, res) => {
  const newTag = await Tag.create({
    name: req.body.name,
    description: req.body.description,
  });
  newTag.save();
  res.json({ message: "success" });
};

exports.readTags = async (req, res) => {
  const tags = await Tag.find({});
  res.json({ message: "success", data: tags });
};

exports.deleteTag = async (req, res) => {
  const id = req.query.id;
  Tag.findOneAndDelete({ _id: id }, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.submitDiscussion = async (req, res) => {
  const { topic, subject, body, author } = req.body;
  const newDiscussion = await Discussion.create({
    topic: topic,
    subject: subject,
    body: body,
    author: author.firstName + " " + author.lastName,
    created_at: new Date(),
  });
  newDiscussion.save();
  res.json({ message: "success" });
};

exports.getDiscussions = async (req, res) => {
  const discussions = await Discussion.find({}).sort({ created_at: -1 });
  res.json({ discussions: discussions });
};

exports.getDiscussion = async (req, res) => {
  const { id } = req.query;
  const discussion = await Discussion.find({ _id: id });
  res.json(discussion);
};
