const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
  componentname: String,
  color: String,
});

module.exports = Template = mongoose.model("template", TemplateSchema);
