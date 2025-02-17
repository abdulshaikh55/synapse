import styles from "./UserProfile.module.css";
import user from "./user_profile";
import courses from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";

const UserProfile = () => {
  const userCourses = user.courses_enrolled;
  return (
    <div className={styles.userProfile}>
      <div className={styles.mainInfo}>
        <div className={styles.profilePic}>
          <img src={user.profile_picture} alt="Profile picture" />
        </div>

        <div className={styles.identification}>
          <div className={styles.username}>
            <h1>{user.username}</h1>
          </div>
          <div className={styles.email}>
            <h2>{user.email}</h2>
          </div>
          <div className={styles.id}>
            <h2>ID: {user.id}</h2>
          </div>
        </div>
      </div>

      <div className={styles.courseInfo}>
        <h2>Courses Enrolled</h2>
        <div className={styles.coursesContainer}>
          {userCourses.map((courseId) => {
            const course = courses.find((c) => c.id === courseId);
            return course ? (
              <CourseCard
                key={course.id}
                {...course}
                className={styles.courseCard}
              />
            ) : null;
          })}
        </div>
      </div>
      <button className={styles.editButton}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
