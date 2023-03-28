import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.symbol}>L</div>
        <div className={styles.name}>Lawliet</div>
      </div>
      <div
        className={
          menu ? `${styles.nav_links}` : `${styles.nav_links} ${styles.active}`
        }
      >
        <li>CONTACT</li>
        <li>TESTIMONIALS</li>
        <li>ABOUT</li>
        <li>TERMS</li>
        <li className={styles.icon_li}>
          <i className="bx bx-search"></i>
        </li>
      </div>
      <div className={styles.menu}>
        <i
          onClick={() => setMenu(!menu)}
          className={menu ? "bx bx-menu" : "bx bx-x"}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
