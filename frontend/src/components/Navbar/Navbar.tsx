import styles from "./Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import searchIconDark from "../../assets/search-b.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import defaultProfilePic from "../../assets/default_profile.png";
import DropDownProfile from "../DropDownProfile/DropDownProfile";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searched, setSearched] = useState("");
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearchClick = () => {
    navigate("/searchedCourses", {
      state: { searchTerm: searched },
    });
    setSearched("");
  };

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <input
          type="text"
          placeholder="Search..."
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearchClick()}
        />
        <img
          src={searchIconDark}
          alt="search icon"
          onClick={handleSearchClick}
        />
      </div>

      {isAuthenticated ? (
        <div className={styles.profilePicture} ref={dropdownRef}>
          <button onClick={handleDropdownToggle}>
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
