import React, { useState } from "react";
import styles from "../styles/Hero.module.css";

import HeroImg from "../assets/Hero.png";
import Google from "../assets/google.png";
import Hubspot from "../assets/hubspot.png";
import Airbnb from "../assets/VectorAribnb.png";
import Microsoft from "../assets/microsoft.png";
import Details from "./Details";
import Count from "./Count";
import Testimonial from "./Testimonial";

function Hero() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.hero_info}>
          <div className={styles.hero_new}>
            <div className={styles.new_text}>New</div>
            <div className={styles.text_info}>
              Stay connected to the upcoming & Recent jobs
            </div>
          </div>
          <div className={styles.hero_heading}>
            Your Solution Legal Consultacy
          </div>
          <div className={styles.heading_subtitle}>
            We are here to help you take care of your legality with the best
            service especially for you.
          </div>
          <div className={styles.hero_btn}>
            <button onClick={() => setModal(true)}>GET STARTED</button>
            {modal && (
              <div className={styles.dialogue_box}>
                <i class="bx bx-x" onClick={() => setModal(false)}></i>
                <div className={styles.getting_started}>
                  Let's Get You Started
                </div>
                <form>
                  <div className={styles.individual_input}>
                    <label>Name</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.individual_input}>
                    <label>Email Address</label>
                    <input
                      type="text"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.individual_input}>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      value={data.contact}
                      onChange={(e) =>
                        setData({ ...data, contact: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.individual_input}>
                    <label>Company Name</label>
                    <input
                      type="text"
                      value={data.company}
                      onChange={(e) =>
                        setData({ ...data, company: e.target.value })
                      }
                    />
                  </div>
                  <button onClick={handleSubmit}>Submit</button>
                </form>
              </div>
            )}
          </div>
          <div className={styles.companies}>
            <p>Trusted by 10+ companies in Indonesia</p>
            <div className={styles.company_details}>
              <div>
                <div className={styles.company_image}>
                  <img src={Google} alt="" />
                </div>
                <div className={styles.company_image}>
                  <img src={Airbnb} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.company_image}>
                  <img src={Hubspot} alt="" />
                </div>
                <div className={styles.company_image}>
                  <img style={{ width: "30px" }} src={Microsoft} alt="" />
                  Microsoft
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hero_img}>
          <img src={HeroImg} alt="" />
          <div className={styles.hero_imginfo}>
            <strong>Tiara Andini</strong>
            <p style={{ color: "#8B8C8C" }}>-Laywer</p>
          </div>
        </div>
      </div>
      <Details />
      <Count />
      <Testimonial />
    </>
  );
}

export default Hero;
