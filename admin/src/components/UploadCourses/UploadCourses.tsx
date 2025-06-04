import styles from './UploadCourses.module.css';
import upload_here_icon from "../../assets/upload_here.png";
import { useState } from 'react';
import axios from 'axios';

const UploadCourses = () => {
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      setUploadStatus('Uploading...');

      // read the file content
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const content = e.target?.result as string;
          // parse the content to get the courses array
          const courseData = eval(`(${content})`).default;

          // send to backend API
          const response = await axios.post('/api/courses/bulk-upload', { courses: courseData });

          response.status = 200;

          setUploadStatus(`Successfully uploaded ${courseData.length} courses`);
        } catch (error) {
          setUploadStatus("Error processing file");
          console.error("Error:", error);
        }
      };
      reader.readAsText(file);
    } catch (error) {
      setUploadStatus("Error uploading file");
      console.error('Error: ', error);
    }
  }

  return (
    <div className={styles.uploadCourses}>
      <p>Upload your courses file here</p>
      <div className={styles.upload_area}>
        <input
          type="file"
          accept=".ts,.js"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <img className={styles.upload_img} src={upload_here_icon} alt="upload courses icon" />
        </label>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </div>
  )
}

export default UploadCourses;