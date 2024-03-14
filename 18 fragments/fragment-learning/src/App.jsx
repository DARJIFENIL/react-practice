import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

//conditional rendoring and map methods
function App() {
  // let foodItem = [];
  let foodItem = ["dal", "Green Vegetable", "Roti", "Salad", "Milk", "ghee"];

  return (
    <>
      <h1 className="fw-bolder food-heading">Healty Food</h1>

      <FoodItems items={foodItem}></FoodItems>
      <ErrorMessage items={foodItem}></ErrorMessage>
    </>
  );
}

export default App;
