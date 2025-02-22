import styles from "./Admin.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddCourse from "../../components/AddCourse/AddCourse";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <Sidebar />

      <Routes>
        <Route path="/add" element={<AddCourse />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
