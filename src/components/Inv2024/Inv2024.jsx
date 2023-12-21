import React from "react";
import "./Inv2024.css";
import { ListFriza, ListJersey, ListPique, ListSwetter, Navbar, } from "..";


function Inv2024 () {
  return (
    <section>
      <Navbar/>
      <h1 className="titulo" id="scrollspyHeading1">FRIZA</h1>
      <ListFriza/>
      <h1 className="titulo" id="scrollspyHeading2">PIQUE</h1>
      <ListPique/>
      <h1 className="titulo" id="scrollspyHeading3">JERSEY</h1>
     <ListJersey/>
      <h1 className="titulo" id="scrollspyHeading4">LAN/ALG</h1>
      <ListSwetter/>
     
    </section>
  );
};

export default Inv2024;
