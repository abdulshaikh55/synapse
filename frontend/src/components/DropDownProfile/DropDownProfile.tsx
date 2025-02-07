import styles from "./DropDownProfile.module.css";

const DropDownProfile = () => {
  return (
    <div className={styles.dropDownProfile}>
      <ul className={styles.dropDownList}>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
