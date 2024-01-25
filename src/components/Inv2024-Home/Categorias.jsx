import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

const secciones = [
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "JERSEY",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "FRIZA",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "PIQUE",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "ALH",
  },
  {
    id: uuidv4(),
    img: "./prenda.jpeg",
    titulo: "POLAR",
  },
];
const Categorias = () => {
  return (
    <>
      <h2 className="titulo">INVIERNO 2024</h2>
      <nav className="categoriaNav">
        {secciones.map((item, index) => (
          <Card
            id={item.id}
            titulo={item.titulo}
            img={item.img}
            key={index}
            routeTo={`/List${item.titulo.charAt(0).toUpperCase()}${item.titulo
              .slice(1)
              .toLowerCase()}`}
          />
        ))}
      </nav>
    </>
  );
};

export default Categorias;
