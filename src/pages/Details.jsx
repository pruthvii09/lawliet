import React from "react";
import styles from "../styles/Details.module.css";
import circle from "../assets/Circle.png";
import Rocket from "../assets/Rocket.png";
import Bag from "../assets/Bag.png";
import Arrow from "../assets/Arrows.png";
const Details = () => {
  return (
    <div className={styles.main_container}>
      <div style={{ marginTop: "30px" }}>
        <div className={styles.heading}>Why do we help with legalization?</div>
        <p>
          We are here for UMKM in Indonesia to carry out the legalization
          process, which is sometimes complicated.
        </p>
      </div>
      <div>
        <div className={styles.flex_card}>
          <div className={styles.card}>
            <img src={circle} alt="" />
            <div className={styles.card_heading}>Enviromental Law</div>
            <p>
              Environmental legal issues might occur since the planned business
              activities are designed
            </p>
          </div>
          <div className={styles.card}>
            <img src={Bag} alt="" />
            <div className={styles.card_heading}>Corporate and Commercial</div>
            <p>
              We provide a complete range of services for the continuity of your
              business activities.
            </p>
          </div>
        </div>
        <div className={styles.flex_card}>
          <div className={styles.card}>
            <img src={Rocket} alt="" />
            <div className={styles.card_heading}>
              Information and Technology
            </div>
            <p>
              IT not followed by the existing regulation which might cause legal
              uncertainty and business uncertainty.
            </p>
          </div>

          <div className={styles.card}>
            <img src={Arrow} alt="" />
            <div className={styles.card_heading}>Other Services</div>
            <p>
              In dealing with disruptive economic and legal challenge, our firm
              also provide various legal services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
