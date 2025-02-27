import { Link, useNavigate } from "react-router-dom";
import styles from "./CourseCard.module.css";

const CourseCard = (props: any) => {
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    navigate("/searchedCourses", { state: { searchTerm: tag } });

  };

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
            <button className={styles.tag} onClick={() => handleTagClick(tag)}>
              #{tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCard;
