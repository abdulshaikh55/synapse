import styles from "./Navbar.module.css";
import { useState } from "react";
import searchIconDark from "../../assets/search-b.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import defaultProfilePic from "../../assets/default_profile.png";
import DropDownProfile from "../DropDownProfile/DropDownProfile";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>
          <p>Synapse</p>
        </div>
      </Link>

      <ul>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." />
        <img src={searchIconDark} alt="search icon" />
      </div>

      {isAuthenticated ? (
        <div className={styles.profilePicture}>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            <img src={defaultProfilePic} alt="Profile" />
          </button>
          {showDropdown && <DropDownProfile />}
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
