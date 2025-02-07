import styles from "./Navbar.module.css";
import searchIconDark from "../../assets/search-b.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

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

        <li>
          <Link to="/contactUs/">Contact Us</Link>
        </li>
      </ul>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
        <img src={searchIconDark} alt="search icon" />
      </div>

      {isAuthenticated ? (
        <div className={styles.profilePicture}>
          <img src="../../assets/default_profile.png" alt="Profile" />
        </div>
      ) : (
        <Link to="/signupLogin">
          <div className={styles.loginSignupButton}>
            <button>Login / Signup</button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
