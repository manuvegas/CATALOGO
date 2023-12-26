import React from "react";
import "./Inicio.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import invierno2024 from "../../../public/invierno2024.png";

const images = [{ id: 8, src: invierno2024, to: "/Inv2024" }];

const Inicio = () => {
  return (
    <main>
      <h1 className="tituloInicio">FOREST TEX</h1>
      <section className="sectionInicio">
        <Carousel className="carouselInicio">
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <Link to={image.to}>
                <img
                  className="d-block imgInicio"
                  src={image.src}
                  alt={`Slide ${image.id}`}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </main>
  );
};

export default Inicio;
