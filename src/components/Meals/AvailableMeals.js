import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "冷盤",
    description: "用來開胃、佐酒或者便餐的最佳選擇",
    price: 500,
  },
  {
    id: "m2",
    name: "和牛",
    description: "來自日本的頂級優質牛肉",
    price: 700,
  },
  {
    id: "m3",
    name: "舒芙蕾",
    description: "質感輕而蓬鬆的法國著名甜點",
    price: 200,
  },
  {
    id: "m4",
    name: "濃湯",
    description: "鮮甜香濃的美式濃湯",
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      price={meal.price}
      name={meal.name}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
