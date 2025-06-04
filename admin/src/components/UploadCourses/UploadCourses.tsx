import styles from './UploadCourses.module.css';
import upload_here_icon from "../../assets/upload_here.png";
const UploadCourses = () => {
  console.log("running upload courses")
  return (
    <div className={styles.uploadCourses}>
      <p>Upload your file here</p>
      <div className={styles.upload_area}>
        <img className={styles.upload_img} src={upload_here_icon} alt="list product icon" />
      </div>
    </div>
  )
}

export default UploadCourses;