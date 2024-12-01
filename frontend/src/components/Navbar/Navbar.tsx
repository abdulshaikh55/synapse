import styles from "./Navbar.module.css";
// import logo from "../../assets/synapse.jpg";
// import searchIconLight from "../../assets/search-w.png";
import searchIconDark from "../../assets/search-b.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img src={logo} alt="synapse logo" /> */}
        <p>Synapse</p>
      </div>

      <ul>
        <li>Courses</li>
        <li>Tests</li>
        <li>Help</li>
      </ul>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
        <img src={searchIconDark} alt="search icon" />
      </div>

      <div className={styles.loginSignupButton}>
        <button>Login / Signup</button>
      </div>
    </div>
  );
};

export default Navbar;