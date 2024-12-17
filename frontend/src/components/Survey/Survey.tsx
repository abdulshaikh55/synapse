import styles from "./Survey.module.css";

const Survey = () => {
  return (
    <section className={styles.survey}>
      <h1>Courses Tailored to You</h1>
      <p>
        Take our survey by clicking the button below and discover courses that
        fit your needs.
      </p>
      <div className={styles.takeSurveyButton}>
        <button>Take survey</button>
      </div>
    </section>
  );
};

export default Survey;
