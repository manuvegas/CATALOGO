import React from "react";

import whatsapp from "../../../public/CATALOGO/whatsapp.svg";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-5 z-999 right-5">
      <a href="https://wa.me/541161856150" target="_blank">
        <img src={whatsapp} className="w-12 h-auto" alt="whatsapp" />
      </a>
    </div>
  );
};

export default Whatsapp;
