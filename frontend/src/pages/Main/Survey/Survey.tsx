import styles from "./Survey.module.css";
import { Link } from "react-router-dom";

const Survey = () => {
  const isAuthenticated = localStorage.getItem('authToken');

  const displayAlert = () => {
    alert("Please login to take the survey");
  }

  return (
    <section className={styles.survey}>
      <h1>Courses Tailored to You</h1>
      <p>
        Take our survey by clicking the button below and discover courses that
        fit your needs.
      </p>
      <div className={styles.takeSurveyButton}>
        {isAuthenticated ? (
          <Link to="/surveyForm">
            <button>Take survey</button>
          </Link>
        ) : (
          <button onClick={displayAlert}>Take survey</button>
        )}
      </div>
    </section>
  );
};

export default Survey;