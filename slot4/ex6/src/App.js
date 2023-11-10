import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Routers from "./Routers";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
      
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
