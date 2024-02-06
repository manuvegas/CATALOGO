import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ titulo, img }) => {
  return (
    <>
      <div className="Card">
        <Link to={`/ListPrendas/${titulo}`} className="card-link">
          <div className="card-image-container">
            <img src={img} alt={titulo} className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{titulo}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
