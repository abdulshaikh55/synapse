import styles from "./Popular.module.css";
import popular_courses from "../../../data/popular_courses";
import CourseCard from "../../../components/CourseCard/CourseCard";

const Popular = () => {
  return (
    <section className={styles.popular}>
      <h2>Most Popular Courses</h2>
      <hr />

      <div className={styles.popularCourse}>
        {popular_courses.map((course) => {
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
    </section>
  );
};

export default Popular;
