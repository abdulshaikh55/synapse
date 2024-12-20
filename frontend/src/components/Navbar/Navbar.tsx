import styles from "./Navbar.module.css";
import searchIconDark from "../../assets/search-b.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>
          <p>Synapse</p>
        </div>
      </Link>

      <ul>
        <li>Courses</li>
        <li>Tests</li>
        <li>Help</li>
      </ul>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
        <img src={searchIconDark} alt="search icon" />
      </div>

      <Link to="/signupLogin">
        <div className={styles.loginSignupButton}>
          <button>Login / Signup</button>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
