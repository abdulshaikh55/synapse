const Course = require('../models/course');

exports.addCourse = async (req, res) => {
  try {
    const { name, tags, pricing, certificate_included, provider, url, image_url, description } = req.body;

    const existingCourse = await Course.findOne({ name, url });

    if (existingCourse) {
      return res.status(400).json({ message: 'Course already exists' });
    }

    const newCourse = new Course({
      name, tags, pricing, certificate_included, provider, url, image_url, description
    })
    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully!', course: newCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error adding course', error });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }

}