import styles from "./Admin.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <Sidebar />
    </div>
  );
};

export default Admin;
