import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.logo}>
          <div className={styles.symbol}>L</div>
          <div className={styles.name}>Lawliet</div>
        </div>
        <div className={styles.footer_links}>
          <div className={styles.individual_link}>
            <strong style={{ marginBottom: "20px" }}>Product</strong>
            <a href="/">Overview</a>
            <a href="/">Feature</a>
            <a href="/">Tutorials</a>
            <a href="/">Pricing</a>
            <a href="/">Releases</a>
          </div>
          <div className={styles.individual_link}>
            <strong style={{ marginBottom: "20px" }}>Company</strong>
            <a href="/">About</a>
            <a href="/">Press</a>
            <a href="/">Careers</a>
            <a href="/">Contact</a>
            <a href="/">Partners</a>
          </div>
          <div className={styles.individual_link}>
            <strong style={{ marginBottom: "20px" }}>Support</strong>
            <a href="/">Help Center</a>
            <a href="/">Terms of service</a>
            <a href="/">Legal</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Status</a>
          </div>
        </div>
      </div>
      <div className={styles.main_footer}>
        <p>
          {" "}
          <i class="bx bx-copyright"></i> 2021 Lawliet. All rights reserved
        </p>
        <div className={styles.mainfooter_links}>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-youtube"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
