import React from "react";
import { v4 as uuidv4 } from "uuid";
import "animate.css/animate.min.css";
import Card from "./Card";

const secciones = [
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "REMERAS",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "CHOMBAS LIZAS JERSEY-PIQUE",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "CHOMBA RAYADA",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "CHOMBA RAYADA JERSEY-DOBLE",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "CHOMBA PIQUE RAYADO",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "FRIZA",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "POLAR",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "PUNTO",
  }
];
const Categorias = () => {
  return (
    <>
      <h2 className="titulo">INVIERNO 2024</h2>
      <nav className="categoriaNav animate__animated animate__fadeInLeft">
        {secciones.map((item, index) => (
          <Card id={item.id} titulo={item.titulo} img={item.img} key={index} />
        ))}
      </nav>
    </>
  );
};

export default Categorias;
