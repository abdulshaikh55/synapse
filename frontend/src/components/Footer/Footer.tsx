import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link to="/about" className={styles.footerLink}>
          About Us+
        </Link>
        <Link to="/contact" className={styles.footerLink}>
          Contact
        </Link>
        <Link to="/privacy" className={styles.footerLink}>
          Privacy Policy
        </Link>
      </div>
      <div className={styles.socialLinks}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.socialIcon} icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.socialIcon} icon={faLinkedin} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.socialIcon} icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
