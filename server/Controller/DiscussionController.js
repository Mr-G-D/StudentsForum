const Tag = require("../Models/Tag");

exports.createTag = async (req, res) => {
  const newTag = await Tag.create({
    name: req.body.name,
    description: req.body.description,
  });
  newTag.save();
  res.json({ message: "success" });
};
