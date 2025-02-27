const SurveyResponse = require('../models/survey');

exports.createSurveyResponse = async (req, res) => {
  const { surveyId, answers } = req.body;

  try {
    const newSurveyResponse = new SurveyResponse({
      user: req.userId,
      surveyId,
      answers,
    });

    await newSurveyResponse.save();
    res.status(201).json({ message: 'Survey response added successfully!', surveyResponse: newSurveyResponse });
  } catch (error) {
    res.status(500).json({ message: 'Error adding survey response', error });
  }
};