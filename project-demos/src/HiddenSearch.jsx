import { useState } from "react";
import styles from "./HiddenSearch.module.css";
import { FaSearch } from "react-icons/fa";
function HiddenSearch() {
  const [showInput, setShowInput] = useState(false);

  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target === e.currentTarget) {
      setShowInput(false);
      setBgColor("white");
    }
  };

  const clicked = (e) => {
    e.stopPropagation();
    setShowInput(false);
    setBgColor("white");
  };
  return (
    <>
      <section
        className={styles.ctr}
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        {showInput ? (
          <div>
            <input autoFocus type="text" placeholder="Search..." />

            <button onClick={clicked}>Search</button>
          </div>
        ) : (
          <FaSearch className={styles.Fa} onClick={() => setShowInput(true)} />
        )}
      </section>
    </>
  );
}
export default HiddenSearch;
