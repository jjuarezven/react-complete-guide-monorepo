import React, { useEffect, useState } from "react";
import Card from "../UI/Card.js";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealsItem/MealItem.js";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMeals = async () => {
    const response = await fetch(
      "https://react-http-2df70-default-rtdb.firebaseio.com/meals.json"
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const responseData = await response.json();
    const loadedMeals = [];

    for (const item in responseData) {
      loadedMeals.push({
        id: item,
        name: responseData[item].name,
        description: responseData[item].description,
        price: responseData[item].price
      });
    }

    setMeals(loadedMeals);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.mealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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
