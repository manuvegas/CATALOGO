import React from "react";
import { v4 as uuidv4 } from "uuid";
import "animate.css/animate.min.css";
import Card from "./Card";

const secciones = [
  {
    id: uuidv4(),
    img: "../INV2024/143.png",
    titulo: "REMERAS",
  },
  {
    id: uuidv4(),
    img: "../INV2024/150.png",
    titulo: "CHOMBAS LIZAS JERSEY-PIQUE",
  },
  {
    id: uuidv4(),
    img: "../INV2024/201.png",
    titulo: "CHOMBA RAYADA",
  },
  {
    id: uuidv4(),
    img: "../INV2024/207.png",
    titulo: "CHOMBA RAYADA JERSEY-DOBLE",
  },
  {
    id: uuidv4(),
    img: "../INV2024/150.png",
    titulo: "CHOMBA PIQUE RAYADO",
  },
  {
    id: uuidv4(),
    img: "../INV2024/604.png",
    titulo: "FRIZA",
  },
  {
    id: uuidv4(),
    img: "../INV2024/150.png",
    titulo: "POLAR",
  },
  {
    id: uuidv4(),
    img: "../INV2024/845.png",
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
