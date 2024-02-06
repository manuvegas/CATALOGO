import React from "react";
import "./Whatsapp.css";
import whatsapp from "../../../public/CATALOGO/whatsapp.svg";

const Whatsapp = () => {
  return (
    <div className="whatsapp-container">
      <a href="https://wa.me/541161856150" target="_blank">
        <img src={whatsapp} className="whatsapp" alt="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;
