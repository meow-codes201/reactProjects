import { useState } from "react";
import styles from "./Counter.module.css";
function Counter() {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h}>{count}</h1>
        <div className={styles.btn}>
          <button className={styles.btn1} onClick={inc}>
            +
          </button>
          <button className={styles.btn1} onClick={dec}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
export default Counter;
