import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio,Inv2024 } from "./components";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Inv2024" element={<Inv2024/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
