const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: [String], required: true },
  pricing: { type: String, required: true },
  certificate_included: { type: Boolean, required: true },
  provider: { type: String, required: true },
  url: { type: String, required: true },
});

const courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;