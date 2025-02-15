import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <h1 className={styles.title}>👤 User Profile</h1>
      <div className={styles.profileInfo}>
        <img
          src="/path/to/profile-pic.jpg"
          alt="Profile"
          className={styles.profilePic}
        />
        <div className={styles.details}>
          <h2 className={styles.username}>Username: JohnDoe</h2>
          <p className={styles.email}>Email: johndoe@example.com</p>
          <p className={styles.bio}>
            Bio: A passionate developer and tech enthusiast! 🚀
          </p>
        </div>
      </div>
      <button className={styles.editButton}>✏️ Edit Profile</button>
    </div>
  );
};

export default UserProfile;
