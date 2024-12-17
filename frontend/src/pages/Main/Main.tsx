import styles from "./Main.module.css";
import banner from "../../assets/banners/banner.png";
import Survey from "../../components/Survey/Survey";
import Popular from "../../components/Popular/Popular";

const Hero = () => {
  return (
    <section className={styles.main}>
      <Survey />

      <div className={styles.banners}>
        <img src={banner} alt="Wow" />
      </div>

      <Popular />
    </section>
  );
};

export default Hero;
