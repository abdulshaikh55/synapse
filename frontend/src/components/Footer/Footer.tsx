import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/x.png";
import instagramIcon from "../../assets/instagram.png";
import linkedInIcon from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link to="/about" className={styles.footerLink}>
          About Us
        </Link>
        <Link to="/contact" className={styles.footerLink}>
          Contact
        </Link>
        <Link to="/privacy" className={styles.footerLink}>
          Privacy Policy
        </Link>
      </div>
      <div className={styles.socialIcons}>
        <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
        <img src={twitterIcon} alt="Twitter" className={styles.socialIcon} />
        <img
          src={instagramIcon}
          alt="Instagram"
          className={styles.socialIcon}
        />
        <img src={linkedInIcon} alt="LinkedIn" className={styles.socialIcon} />
      </div>
    </footer>
  );
};

export default Footer;
