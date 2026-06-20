import styles from "./Todos.module.css";
import { useState } from "react";
function Todos() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if (input) {
      setTodo([...todo, input]);
    }
    setInput("");
  };

  const del = (idToDel) => {
    const newTodo = todo.filter((_, index) => index != idToDel);
    setTodo(newTodo);
  };

  return (
    <>
      <div className={styles.ctr}>
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="enter task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.ip}
          />
          <button onClick={add} className={styles.add}>
            Add
          </button>
        </div>
        {todo.map((t, index) => (
          <section key={index} className={styles.sct}>
            <span className={styles.task}>{t}</span>
            <button className={styles.x} onClick={() => del(index)}>
              x
            </button>
          </section>
        ))}
      </div>
    </>
  );
}
export default Todos;
