const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const courseValidation = require('../middlewares/courseValidation');

// Route to post a new course
router.post('/add', courseValidation, courseController.addCourse);

module.exports = router;