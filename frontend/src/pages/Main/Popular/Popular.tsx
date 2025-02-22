import styles from "./Popular.module.css";
import courses from "../../../data/courses";
import CourseCard from "../../../components/CourseCard/CourseCard";

const Popular = () => {
  return (
    <section className={styles.popular}>
      <h2>Most Popular Courses</h2>
      <hr />

      <div className={styles.popularCourse}>
        {courses.slice(0, 4).map((course) => {
          return (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              tags={course.tags}
              image={course.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
