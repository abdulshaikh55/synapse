import styles from "./Sidebar.module.css";
import add_product_icon from "../../assets/add_course.png";
import list_product_icon from "../../assets/list_icon.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.item}>
        <img src={add_product_icon} alt="add product icon" />
        <p>Add Course</p>
      </div>

      <div className={styles.item}>
        <img src={list_product_icon} alt="list product icon" />
        <p>Course List</p>
      </div>
    </div>
  );
};

export default Sidebar;
