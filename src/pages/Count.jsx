import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styles from "../styles/Count.module.css";
const Count = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className={styles.main_container}>
      <div className={styles.counter_heading}>Some count that matters</div>
      <p>Our achievement in the journey depicted in numbers</p>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(true)}
      >
        <div className={styles.counter}>
          <div className={styles.individual_counter}>
            <div>
              {counterOn && (
                <CountUp start={0} end={30} duration={2} delay={0} />
              )}
            </div>
            <p>Clients</p>
          </div>
          <div
            style={{ borderLeft: "1px solid", borderRight: "1px solid" }}
            className={styles.individual_counter}
          >
            <div>
              {counterOn && (
                <CountUp start={0} end={300} duration={2} delay={0} />
              )}
              +
            </div>
            <p>Total buisness legalities</p>
          </div>
          <div className={styles.individual_counter}>
            <div>
              {counterOn && (
                <CountUp start={0} end={8} duration={2} delay={0} />
              )}
            </div>
            <p>Years of Journey</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Count;
