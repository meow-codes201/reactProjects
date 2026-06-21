import styles from "./Calculator.module.css";
import { useState } from "react";
import clickSound from "./dragon-studio-bubble-pop.mp3";
import equalSound from "./shidenbeatsmusic-sound-effect-twinklesparkle.mp3";
import clearSound from "./dragon-studio-simple-whoosh.mp3";
function Calculator() {
  const [inputVal, setInputVal] = useState("");
  const equals = new Audio(equalSound);
  const click = new Audio(clickSound);
  const clears = new Audio(clearSound);
  const clear = () => {
    clears.currentTime = 0;
    clears.play();
    setInputVal("");
  };

  const display = (value) => {
    click.currentTime = 0;
    click.play();
    setInputVal(inputVal + value);
  };
  const calculate = () => {
    equals.currentTime = 0;
    equals.play();
    setInputVal(eval(inputVal));
  };
  return (
    <>
      <form className={styles.cal} name="calc">
        <input type="text" className={styles.value} value={inputVal} readOnly />
        <span className={styles.clear} onClick={() => clear()}>
          c
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className={styles.plus} onClick={() => display("+")}>
          +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("0")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className={styles.equal} onClick={() => calculate()}>
          =
        </span>
      </form>
    </>
  );
}
export default Calculator;
