import styles from "./CourseCard.module.css";

const CourseCard = (props: any) => {
  return (
    <div className={styles.courseCard}>
      <a href={props.url}>
        <img
          src={props.image}
          alt={props.name}
          className={styles.courseCardImage}
        />
        <h3>{props.name}</h3>
      </a>

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
