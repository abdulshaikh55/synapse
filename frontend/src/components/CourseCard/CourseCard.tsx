import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

const CourseCard = (props: any) => {
  return (
    <div className={styles.courseCard}>
      <Link to={`/courses/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          className={styles.courseCardImage}
        />
        <h3 className={styles.courseName}>{props.name}</h3>
      </Link>

      <ul className={styles.courseCardList}>
        {props.tags.slice(0, 3).map((tag: string, index: number) => (
          <li key={index} className={styles.courseCardListItem}>
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCard;
