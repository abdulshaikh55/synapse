import styles from "./AddCourse.module.css";
import { useState } from "react";

const AddCourse = () => {

  const [courseDetails, setCourseDetails] = useState({
    name: "",
    tags: [],
    pricing: "",
    certificate_included: "",
    provider: "",
    url: "",
    image_url: "",
    description: "",
  });


  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const addCourse = async () => {
    // Validate required fields
    if (!courseDetails.name || !courseDetails.provider || !courseDetails.url) {
      alert("Please fill in all required fields: Course Title, Provider Name, and Course URL.");
      return;
    }

    const array: string = courseDetails.tags.toString();
    const product = {
      ...courseDetails,
      tags: array.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
    };

    try {
      const addCourseResponse = await fetch("http://localhost:8080/admin/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!addCourseResponse.ok) {
        alert("Failed to add course. Please try again.");
        return;
      } else {
        alert("Course added successfully!");
      }

      console.log(product)
    } catch (error) {
      console.error("Error adding course:", error);
      alert("An error occurred while adding the course. ⚠️");
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

      <div className={styles.itemField}>
        <p>Course Description</p>
        <input
          type="text"
          value={courseDetails.description}
          onChange={changeHandler}
          name="description"
          placeholder="Describe the course in 2 - 3 sentences"
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
        <p>Image URL</p>
        <input
          type="text"
          name="image_url"
          value={courseDetails.image_url}
          onChange={changeHandler}
          placeholder="Enter the image URL"
        />
      </div>

      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default AddCourse;