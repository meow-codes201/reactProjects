import { useState } from "react";
import styles from "./Accordian.module.css";
function Accordion({ id, title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.bdy} key={id}>
        <div className={styles.ctr}>
          <div className={styles.hdr} onClick={() => setIsActive(!isActive)}>
            <div className={styles.tl}>{title}</div>
            <span className={styles.icon}>{isActive ? "-" : "+"}</span>
          </div>

          <div>
            {isActive && <p className={styles.cardContent}>{content}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
export default Accordion;
