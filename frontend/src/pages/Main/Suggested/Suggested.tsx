import styles from "./Suggested.module.css";
import courses from "../../../data/courses";
import CourseCard from "../../../components/CourseCard/CourseCard";

const getRandomCourses = (num: number) => {
  const shuffled = courses.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Suggested = () => {
  return (
    <section className={styles.suggested}>
      <h2>Suggested</h2>
      <hr />

      <div className={styles.suggestedCourse}>
        {getRandomCourses(4).map((course) => {
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

export default Suggested;
