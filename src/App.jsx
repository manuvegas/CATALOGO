import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio, Categorias, ListPrendas } from "./components";



function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inv2024-Home" element={<Categorias />} />
            <Route path="/ListPrendas/:titulo" element={<ListPrendas/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
