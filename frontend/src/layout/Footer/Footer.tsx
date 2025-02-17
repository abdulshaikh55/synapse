import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.instagram.com", icon: faInstagram },
    { href: "https://www.linkedin.com", icon: faLinkedin },
    { href: "https://www.facebook.com", icon: faFacebook },
  ];

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
          {socialLinks.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={styles.socialIcon} icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
