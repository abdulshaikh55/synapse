const express = require('express');
const router = express.Router();
const surveyResponseController = require('../controllers/surveyResponseController');

router.post('/surveyResponse', surveyResponseController.addSurvey);


module.exports = router;