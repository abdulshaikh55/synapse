const Course = require('../models/course');

exports.addCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully!', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error adding course', error });
  }
};