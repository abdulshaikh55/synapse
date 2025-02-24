import React, { createContext, useContext } from 'react';
import courses from '../data/courses';

const CourseContext = createContext(courses);

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CourseContext.Provider value={courses}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  return useContext(CourseContext);
};