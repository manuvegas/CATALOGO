import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio, Categorias, ListFriza, ListPolar, ListPique, ListJersey, ListAlh } from "./components";


function App() {
  return (
    <>
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Inv2024-Home" element={<Categorias/>}/>
            <Route path="/ListFriza" element={<ListFriza/>}/>
            <Route path="/ListPolar" element={<ListPolar/>}/>
            <Route path="/ListPique" element={<ListPique/>}/>
            <Route path="/ListJersey" element={<ListJersey/>}/>
            <Route path="/ListAlh" element={<ListAlh/>}/>


          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
