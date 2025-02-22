const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveyResponseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  surveyId: { type: String, required: true },
  answers: {
    type: Map,
    of: Schema.Types.Mixed,
  }
}, { timestamps: true });

const surveyResponseModel = mongoose.model('SurveyResponse', surveyResponseSchema);

module.exports = surveyResponseModel;