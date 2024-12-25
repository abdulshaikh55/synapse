import React, { useState } from "react";
import styles from "./Contact.module.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    const formErrors: any = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.fullName || !nameRegex.test(formData.fullName)) {
      formErrors.fullName = "Name should only contain alphabets and spaces.";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!formData.contactNumber || formData.contactNumber.length !== 10) {
      formErrors.contactNumber = "Contact number should be exactly 10 digits.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      Swal.fire({
        title: "Submit",
        text: "Your Data is Submitted",
        icon: "success",
      });

      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please fix the errors in the form.",
        icon: "error",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.formContent}>
          <p className={styles.welcomeText}>Contact Us</p>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name</label>
              <input
                type="text"
                name="fullName"
                className={styles.input}
                placeholder="Enter your name"
                required
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {errors.fullName && (
                <span className={styles.error}>{errors.fullName}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Enter your Email ID"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                className={styles.input}
                placeholder="Enter your Contact Number"
                required
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
              {errors.contactNumber && (
                <span className={styles.error}>{errors.contactNumber}</span>
              )}
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className={styles.addressSection}>
            <p className={styles.addressTitle}>Office Address:</p>
            <address className={styles.addressText}>
              Gate No. (314/330), Shirol - Wadi Road,(Agar Bhag), Jaysingpur :
              416101
            </address>
          </div>

          <div className={styles.socialLinks}>
            <p className={styles.socialTitle}>Follow us on:</p>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
