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
