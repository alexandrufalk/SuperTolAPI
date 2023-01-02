const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  description: String,
  sheetname: String,
  author: String,
  date: { type: Date, default: Date.now },
});

module.exports = Summary = mongoose.model("summary", SummarySchema);
