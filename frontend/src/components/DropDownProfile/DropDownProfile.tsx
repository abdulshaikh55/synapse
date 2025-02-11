import styles from "./DropDownProfile.module.css";
import { useAuth } from "../../context/AuthContext";

const DropDownProfile = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.dropDownProfile}>
      <ul className={styles.dropDownProfileList}>
        <li className={styles.dropDownProfileListItem}>Profile</li>
        <li className={styles.dropDownProfileListItem}>Settings</li>
        <li className={styles.dropDownProfileListItem} onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
