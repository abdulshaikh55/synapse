import styles from "./Survey.module.css";
import { Link } from "react-router-dom";

const Survey = () => {
  return (
    <section className={styles.survey}>
      <h1>Courses Tailored to You</h1>
      <p>
        Take our survey by clicking the button below and discover courses that
        fit your needs.
      </p>
      <div className={styles.takeSurveyButton}>
        <Link to="/surveyForm">
          <button>Take survey</button>
        </Link>
      </div>
    </section>
  );
};

export default Survey;
