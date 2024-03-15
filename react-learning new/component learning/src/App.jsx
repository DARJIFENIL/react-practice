import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./components/Headers";
import Footers from "./components/Footers";

function App() {
  return (
    <>
      <div className="main">
        <Headers></Headers>
        <div className="row">
          <Cart className="cartItems"></Cart>
        </div>

        <Footers></Footers>
      </div>
    </>
  );
}

export default App;

function Cart() {
  return <div className="cartItems">cart section</div>;
}
