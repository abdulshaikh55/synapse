const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const authenticateUser = require('../middlewares/authMiddleware');

router.post('/add', authenticateUser, surveyController.createSurveyResponse);

module.exports = router;