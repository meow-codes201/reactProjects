import { useState } from "react";
import styles from "./ToggleBackgroundColor.module.css";
function ToggleBackgroundColor() {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [btnStyle, setBtnStyle] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setBtnStyle(btnStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <>
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className={styles.ctr}
      >
        <button
          className={styles.myBtn}
          onClick={handleClick}
          style={{
            color: textColor,
            backgroundColor: bgColor,
            borderColor: textColor,
          }}
        >
          {bgColor === "#1b1b1b" ? "black" : "white"}
        </button>
        <section className={styles.textContent}>
          <h1>Welcome to Real World</h1>
        </section>
      </div>
    </>
  );
}
export default ToggleBackgroundColor;
