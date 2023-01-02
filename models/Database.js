const moongoose = require("mongoose");

const TemplateSchema = new Schema({
  projectname: String,
  projecttemplate: String,
  description: String, // String is shorthand for {type: String}
  author: String,
  date: { type: Date, default: Date.now },
});

module.exports = Template = moongoose.model("template", TemplateSchema);
