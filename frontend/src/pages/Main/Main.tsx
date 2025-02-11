import styles from "./Main.module.css";
import banner from "../../assets/banners/banner.png";
import Survey from "../../components/Survey/Survey";
import Popular from "../../components/Popular/Popular";
import yami_quote from "../../assets/yami_quote.png";
import resource_in from "../../assets/coding_banner.jpg";
import resource_out from "../../assets/contribute_banner.jpg";

const Hero = () => {
  return (
    <section className={styles.main}>
      <Survey />

      <div className={styles.banners}>
        <img src={banner} alt="Wow" />
      </div>

      <Popular />
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

      <section className={styles.additionalResources}>
        <h2>Additional Resources</h2>
        <div className={styles.io}>
          <div className={styles.in}>
            <a
              href="https://www.jjmcoe.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resource_in} alt="Coding logo" />
              <h3>Alumni resources</h3>
              <p>Take a look at these resources compiled by your alumni</p>
            </a>
          </div>
          <div className={styles.out}>
            <a
              href="https://github.com/jjmcoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resource_out} alt="Contribution banner" />
              <h3>Contribute</h3>
              <p>Share the resources you have found useful with your juniors</p>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
