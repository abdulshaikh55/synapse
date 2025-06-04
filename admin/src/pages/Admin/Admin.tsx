import styles from "./Admin.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddCourse from "../../components/AddCourse/AddCourse";
import ListCourses from '../../components/ListCourses/ListCourses';
import UploadCourses from '../../components/UploadCourses/UploadCourses.tsx';

const Admin = () => {
  return (
    <div className={styles.admin}>
      <Sidebar />

      <Routes>
        <Route path="/add" element={<AddCourse />}></Route>
        <Route path="/list" element={<ListCourses />}></Route>
        <Route path="/upload_file" element={<UploadCourses />}> </Route>
      </Routes>
    </div>
  );
};

export default Admin;
