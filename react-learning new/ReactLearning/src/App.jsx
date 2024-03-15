import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = "my name is fenil darji";
  const Arr = [10, 20, 30, 40];
  const obj = {
    Fname: "fenil",
    Lname: "darji",
    Hardik: [
      { age: 28, name: "test" },
      {
        age: 29,
        name: "test1",
      },
      {
        age: 30,
        name: "test1",
      },
      {
        age: 31,
        name: "test2",
      },
      {
        age: 32,
        name: "test3",
      },
      {
        age: 33,
        name: "test4",
      },
    ],
  };
  const status = true;

  return (
    <div className="main">
      console.log(obj)
      <h1>{name}</h1>
      {Arr.map((num) => {
        return <div key={num}>{num}</div>;
      })}
      <div>{obj.Fname}</div>
      {status ? (
        <h1 style={{ color: "red", backgroundColor: "violet" }}>
          welcom to react
        </h1>
      ) : (
        ""
      )}
      {/* <div>{obj.Hardik.age}</div>
      <div>{obj.Hardik.name}</div> */}
      {obj.Hardik.map((val) => {
        return (
          <div key={val}>
            {val.age}
            {val.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
