import courses from '../data/courses';

export const useCourse = (id: string | undefined) => {
  // Return null if id is undefined
  if (!id) {
    return null;
  }

  // Find and return the course
  return courses.find(course => course.id === parseInt(id));
};