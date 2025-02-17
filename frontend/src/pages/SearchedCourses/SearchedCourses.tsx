import styles from "./SearchedCourses.module.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import coursesData from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";

interface Course {
  id: number;
  name: string;
  image: string;
  tags: string[];
  pricing: string;
  certificate_included: boolean;
  provider: string;
  url: string;
}

const SearchedCourses = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    const filtered = coursesData.filter(
      (course: Course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredCourses(filtered);
  }, [searchTerm]);

  return (
    <div className={styles.searchedCourses}>
      <h2>Searched Courses</h2>
      {filteredCourses.length > 0 ? (
        <div className={styles.coursesContainer}>
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              tags={course.tags}
              image={course.image}
            />
          ))}
        </div>
      ) : (
        <p>No courses found for "{searchTerm}"</p>
      )}
    </div>
  );
};
export default SearchedCourses;
