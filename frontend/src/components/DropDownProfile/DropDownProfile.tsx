import styles from "./DropDownProfile.module.css";

const DropDownProfile = () => {
  return (
    <div className={styles.dropDownProfile}>
      <ul className={styles.dropDownProfileList}>
        <li className={styles.dropDownProfileListItem}>Profile</li>
        <li className={styles.dropDownProfileListItem}>Settings</li>
        <li className={styles.dropDownProfileListItem}>Logout</li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
