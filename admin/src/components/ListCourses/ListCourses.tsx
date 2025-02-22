import { useEffect, useState } from "react";
import styles from "./ListCourses.module.css";
import cross_icon from "../../assets/cross_icon.png";

interface Course {
  id: string;
  image_url: string;
  name: string;
  tags: string;
  pricing: string;
  certificate_included: string;
  provider: string;
  url: string;
}

const ListCourses = () => {
  const [allCourses, setAllCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const response = await fetch("http://localhost:8080/admin/all");
    const data: Course[] = await response.json();
    setAllCourses(data);
  };

  const removeCourse = async (id: string) => {
    try {
      const response = await fetch("http://localhost:4000/removecourse", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove course ❌");
      }

      await fetchInfo();
    } catch (error) {
      console.error("Error removing course:", error);
    }
  };

  return (
    <div className={styles.listCourse}>
      <h1>All Courses</h1>
      <div className={styles.formatMain}>
        <p>Image</p>
        <p>Name</p>
        <p>Tags</p>
        <p>Pricing</p>
        <p>Certificate?</p>
        <p>Provider</p>
        <p>URL</p>
      </div>

      <div className={styles.allCourses}>
        <hr />
        {allCourses.map((course) => (
          <div key={course.id}>
            <div className={`${styles.format} ${styles.formatMain}`}>
              <img
                className={styles.courseIcon}
                src={course.image_url}
                alt={course.name}
              />
              <p>{course.tags}</p>
              <p>{course.pricing}</p>
              <p>{course.certificate_included}</p>
              <p>{course.provider}</p>
              <p>{course.url}</p>
              <img
                src={cross_icon}
                alt="Cross Icon"
                className={styles.removeIcon}
                onClick={() => removeCourse(course.id)}
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCourses;
