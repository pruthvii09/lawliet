import React from "react";
import styles from "../styles/Testimonial.module.css";
import Photo from "../assets/Photo.png";
import QuestionImg from "../assets/questionimg.png";
const Testimonial = () => {
  return (
    <>
      <div className={styles.main_container}>
        <h1>Clients Testimonial</h1>
        <div className={styles.flex_container}>
          <div>
            <div className={styles.individual_container}>
              <strong>Incredible Experience</strong>
              <p>
                We had an incredible experience working with Landify and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the concept so quickly.
              </p>
            </div>
            <div className={styles.user}>
              <div>
                <img src={Photo} alt="" />
              </div>
              <div>
                <div>Anya Tailor Joy</div>
                <p>CEO, SF Industires</p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.individual_container}>
              <strong>Dependable, Responsive, Professional Partner</strong>
              <p>
                Fermin Apps has collaborated with Landify team for several
                projects such as Photo Sharing Apps and Custom Social Networking
                Apps. The experience has been pleasant, professional and
                exceeding our expectations.{" "}
              </p>
            </div>
            <div className={styles.user}>
              <div>
                <img src={Photo} alt="" />
              </div>
              <div>
                <div>Sri Alam</div>
                <p>CEO, Membagongkan GROUP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.question}>
        <div>
          <h1>Complex Questions?</h1>
          <p>
            Request for a personalized budget for your legal problem. We will
            send you a coupe options in 24 hours. You can have free consult , if
            a our first customer.
          </p>
          <button>
            <i className="bx bxs-phone"></i>Call Now
          </button>
        </div>
        <div className={styles.question_img}>
          <img src={QuestionImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
