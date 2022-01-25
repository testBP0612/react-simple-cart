import classes from "./MealsSummary.module.css"

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>一些美味的食物</h2>
      <p>選擇你要的食物</p>
      <p>加入購物車</p>
    </section>
  );
};

export default MealsSummary;
