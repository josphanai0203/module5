import logo from "./logo.svg";
import "./App.css";
import {useState} from "react"
function App() {
  const [selectCar,setSelectCar]= useState({car:"Mercedes S600",
color:"red"});
  const cars = ["Mercedes S600", "VinFast", "Toyota "];
  const colors = ["red", "green", "yellow", "blue", "black"];
  return (
    <div>
      <h1>Select Your Car</h1>
      <br />
      <span>
        Select a Car
        <select style={{ marginLeft: "10px" }} onChange={(e)=>setSelectCar({...selectCar,car:e.target.value})}>
          {cars.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </span>
      <br />
      <span>
        Select a Color
        <select style={{ marginLeft: "10px" }} onChange={(e)=>setSelectCar({...selectCar,color:e.target.value})}>
          {colors.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </span>
      <br />
      <h3>You select a {selectCar.color} - {selectCar.car} </h3>
    </div>
  );
}

export default App;
