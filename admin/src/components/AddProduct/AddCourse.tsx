import styles from "./AddCourse.module.css";
import upload_area from "../../assets/upload_area.svg";
import { useState } from "react";

const AddCourse = () => {
  const [image, setImage] = useState<File | null>(null);
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    image: "",
    tags: [],
    pricing: "",
    certificate_included: "",
    provider: "",
    url: "",
  });

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCourseDetails({ ...courseDetails, [e.target.name]: e.target.value });
  };

  const addCourse = async () => {
    try {
      console.log(courseDetails);
      let responseData: any;
      const product = { ...courseDetails };

      const formData = new FormData();
      if (image) {
        formData.append("product", image);
      }

      const addCourseResponse = await fetch("http://localhost:8080/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      responseData = await addCourseResponse.json();

      if (responseData?.success) {
        alert("Course Added!");
      } else {
        alert("Failed to add course.");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("An error occurred while adding the course.");
    }
  };

  return (
    <div className={styles.addCourse}>
      <div className={styles.itemField}>
        <p>Course Title</p>
        <input
          value={courseDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter course title"
        />
      </div>

      <div className={styles.itemField}>
        <p>Relevant Tags</p>
        <input
          type="text"
          value={courseDetails.tags}
          onChange={changeHandler}
          name="tags"
          placeholder="Enter relevant tags, separated by commas"
        />
      </div>

      <div className={styles.dualSection}>
        <div className={styles.pricing}>
          <div className={styles.itemField}>
            <p>Pricing</p>
            <div className={styles.radioChoices}>
              <label className={styles.radioChoice}>
                <input
                  type="radio"
                  name="pricing"
                  value="free"
                  checked={courseDetails.pricing === "free"}
                  onChange={changeHandler}
                />
                Free
              </label>
              <label className={styles.radioChoice}>
                <input
                  type="radio"
                  name="pricing"
                  value="freemium"
                  checked={courseDetails.pricing === "freemium"}
                  onChange={changeHandler}
                />
                Freemium
              </label>
              <label className={styles.radioChoice}>
                <input
                  type="radio"
                  name="pricing"
                  value="paid"
                  checked={courseDetails.pricing === "paid"}
                  onChange={changeHandler}
                />
                Paid
              </label>
            </div>
          </div>
        </div>

        <div className={styles.certificateIncluded}>
          <div className={styles.itemField}>
            <p>Certificate Included?</p>
            <div className={styles.radioChoices}>
              <label className={styles.radioChoice}>
                <input
                  type="radio"
                  name="certificate_included"
                  value="true"
                  checked={courseDetails.certificate_included === "true"}
                  onChange={changeHandler}
                />
                Yes
              </label>
              <label className={styles.radioChoice}>
                <input
                  type="radio"
                  name="certificate_included"
                  value="false"
                  checked={courseDetails.certificate_included === "false"}
                  onChange={changeHandler}
                />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.itemField}>
        <p>Provider Name</p>
        <input
          type="text"
          name="provider"
          value={courseDetails.provider}
          onChange={changeHandler}
          placeholder="Enter the provider name"
        />
      </div>

      <div className={styles.itemField}>
        <p>Course URL</p>
        <input
          type="text"
          name="url"
          value={courseDetails.url}
          onChange={changeHandler}
          placeholder="Enter the course URL"
        />
      </div>

      <div className={styles.itemField}>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="upload image"
            className={styles.thumbnailImg}
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default AddCourse;
