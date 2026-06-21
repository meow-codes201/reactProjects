import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Meals.module.css";
function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const itemList = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className={styles.card} key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className={styles.content}>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <>
      <div className={styles.ctr}>{itemList}</div>
    </>
  );
}
export default Meals;
