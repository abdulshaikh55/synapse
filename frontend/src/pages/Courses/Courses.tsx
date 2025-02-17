import styles from "./Courses.module.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import all_courses from "../../data/courses";

const Courses = () => {
  return (
    <div className={styles.coursesPage}>
      <h2 className={styles.courseHeader}>All Courses</h2>
      <div className={styles.coursesContainer}>
        {all_courses.map((course) => {
          return (
            <CourseCard
              id={course.id}
              name={course.name}
              tags={course.tags}
              image={course.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
