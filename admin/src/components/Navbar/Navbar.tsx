import styles from "./Navbar.module.css";
import nav_profile from "../../assets/rick_sanchez.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        <p>Synapse</p>
      </div>
      <img src={nav_profile} alt="nav profile" className={styles.navProfile} />
    </div>
  );
};

export default Navbar;
