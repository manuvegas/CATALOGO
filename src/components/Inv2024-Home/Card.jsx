import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({titulo,img,id}) => {
  return (
    <>
      <div className="Card">
        <Link to={`/ListCards/${id}`} className="card-link">
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
