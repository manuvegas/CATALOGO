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
    titulo: "CHOMBAS LISAS JERSEY-PIQUE",
  },
  {
    id: uuidv4(),
    img: "../INV2024/201.png",
    titulo: "CHOMBA RAYADA",
  },
  {
    id: uuidv4(),
    img: "../INV2024/207.png",
    titulo: " JERSEY-DOBLE",
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
    img: "../INV2024/504.png",
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
      <h2 className="flex justify-center items-center text-black text-3xl sm:text-5xl font-extrabold py-8">INVIERNO 2024</h2>
      <nav className="flex flex-wrap gap-5 max-w-[1500px] mx-auto pb-20 justify-center items-center animate__animated animate__fadeInLeft">
        {secciones.map((item, index) => (
          <Card id={item.id} titulo={item.titulo} img={item.img} key={index} />
        ))}
      </nav>
    </>
  );
};

export default Categorias;
