const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
// const courseValidation = require('../middlewares/courseValidation');

// Route to post a new course
router.post('/add', courseController.addCourse);

router.get('/all', courseController.getAllCourses);

module.exports = router;