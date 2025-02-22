const SurveyResponse = require('../models/surveyResponse');

exports.addSurvey = async (req, res) => {
  try {
    const { user, surveyId, answers } = req.body;

    const newSurveyResponse = new SurveyResponse({
      user,
      surveyId,
      answers
    });

    // await newSurveyResponse.save();
    res.send(newSurveyResponse);
    res.status(201).json({ message: 'Survey response added successfully!', surveyResponse: newSurveyResponse });
  } catch (error) {
    res.status(500).json({ message: 'Error adding survey response', error });
  }
};