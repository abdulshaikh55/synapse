import styles from "./AddCourse.module.css";
import { useState } from "react";
import upload_area from "../../assets/upload_area.svg";

const AddCourse = () => {
  const [image, setImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [courseDetails, setCourseDetails] = useState({
    name: "",
    tags: [],
    pricing: "",
    certificate_included: "",
    provider: "",
    url: "",
    image_url: "" // Ensure image_url is part of the initial state
  });

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setFile(file);
    } else {
      alert("No file selected. Please choose an image file.");
    }
  };

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
    const data = new FormData();

    if (file) {
      data.append("file", file); // Ensure the file is appended correctly
    } else {
      alert("Please select an image file to upload.");
      return;
    }

    data.append('upload_preset', 'synapse');
    data.append('cloud_name', 'du8gajum1');

    try {
      const uploadImageResponse = await fetch("https://api.cloudinary.com/v1_1/du8gajum1/image/upload", {
        method: "POST",
        body: data
      });

      const uploadImageData = await uploadImageResponse.json();

      if (!uploadImageData.url) {
        alert("Failed to upload image. Please try again.");
        return;
      }

      const product = {
        ...courseDetails,
        image_url: uploadImageData.url,
        tags: array.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
      };

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