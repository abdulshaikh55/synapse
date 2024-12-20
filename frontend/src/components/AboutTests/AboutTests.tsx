import styles from "./AboutTests.module.css";
import yami_quote from "../../assets/yami_quote.png";

const AboutTests = () => {
  return (
    <section className={styles.aboutTests}>
      <div className={styles.left}>
        <h2>Test your Limits</h2>

        <div className={styles.skillSection}>
          <h3>Skill Assessment</h3>
          <p>
            Take tests of the courses you want to / have completed and assess
            your level
          </p>
        </div>

        <div className={styles.skillSection}>
          <h3>Coding Practice</h3>
          <p>Level up your coding skills by practicing problem solving</p>
        </div>

        <div className={styles.skillSection}>
          <h3>Inbuilt IDE</h3>
          <p>
            Directly access Integrated Development Environment built into the
            website for the most popular programming languages
          </p>
        </div>

        <div></div>
      </div>
      <div className={styles.right}>
        <img src={yami_quote} alt="Quote" />
      </div>
    </section>
  );
};

export default AboutTests;
