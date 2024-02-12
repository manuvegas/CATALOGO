import React from "react";
import "./Inicio.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import "animate.css/animate.min.css";

const images = [{ id: uuidv4(), src: "/CATALOGO/invierno2024.jpg", to: "/Inv2024-Home" }];

const Inicio = () => {
  return (
    <main>
      <h1 className="titulo"><img src="" alt="" />FOREST TEX <img src="" alt="" /></h1>
      <section className="sectionInicio animate__animated animate__fadeInUp">
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
