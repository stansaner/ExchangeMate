import React from "react";
import { useState } from "react";
import "./contact.css";

// function Contact() {
//   return <h1>contact</h1>;
// }

const Contact = () => {
  const [food, setFood] = useState("fruit");
  const [drink, setDrink] = useState("water");
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };
  return (
    <div>
      <label>
        What do we eat?
        <select value={food} onChange={handleFoodChange}>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </label>
      <label>
        What do we drink?
        <select value={drink} onChange={handleDrinkChange}>
          <option value="water">Water</option>
          <option value="beer">Beer</option>
          <option value="wine">Wine</option>
        </select>
      </label>
      <p>We eat {food}!</p>
      <p>We drink {drink}!</p>
    </div>
  );
};

export default Contact;
