import React from "react";
import "./testpage.css";

import Dropdown from "../../components/dropdown/Dropdown";

const Testpage = () => {
  const [food, setFood] = React.useState("fruit");
  const [drink, setDrink] = React.useState("water");

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };

  const foodOptions = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];

  const drinkOptions = [
    { label: "Water", value: "water" },
    { label: "Beer", value: "beer" },
    { label: "Wine", value: "wine" },
  ];

  return (
    <div className="selectOptions">
      <Dropdown
        label="What do we eat?"
        options={foodOptions}
        value={food}
        onChange={handleFoodChange}
      />

      <Dropdown
        label="What do we drink?"
        options={drinkOptions}
        value={drink}
        onChange={handleDrinkChange}
      />

      <p>We eat {food}!</p>
      <p>We drink {drink}!</p>
    </div>
  );
};

export default Testpage;
