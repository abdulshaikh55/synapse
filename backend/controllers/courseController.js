const Course = require('../models/course');

exports.addCourse = async (req, res) => {
  try {
    const { name, tags, pricing, certificate_included, provider, url } = req.body;

    const existingCourse = await Course.findOne({ name, url });

    if (existingCourse) {
      return res.status(400).json({ message: 'Course already exists' });
    }

    const newCourse = new Course({
      name, tags, pricing, certificate_included, provider, url
    })
    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully!', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error adding course', error });
  }
};