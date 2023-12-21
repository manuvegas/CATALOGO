import React from "react";
import { Carousel } from "react-bootstrap";
import "./CardInv.css";

function Card({ title, article, price, details, images }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          {/* Carrusel de imágenes */}
          <div className="col-lg-6">
            <Carousel nextLabel="" prevLabel="">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    alt={`Prenda ${index + 1}`}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          {/* Detalles de la prenda */}
          <div className="col-lg-6">
            <h2>{title}</h2>
            <p>Artículo: {article}</p>
            <p>Precio: {price}</p>
            <p>Detalles: {details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
