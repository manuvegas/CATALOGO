import React from "react";
import ListCard from "./ListCard";

const alh = [
  {
    titulo: "PRENDA",
    imgs: "prenda.jpeg",
    precio: 20,
    articulo: "230",
    descripcion: "",
    material: "",
    talles:"S M L XL XXL",
    color: "WHITE",
  },
  {
    titulo: "PRENDA",
    imgs: "prenda.jpeg",
    precio: 20,
    articulo: "230",
    descripcion: "",
    material: "",
    talles:"S M L XL XXL",
    color: ["WHITE", "BLACK", "BLUE", "MOSTAZA"],
  },
  {
    titulo: "PRENDA",
    imgs: "prenda.jpeg",
    precio: 20,
    articulo: "230",
    descripcion: "",
    material: "",
    talles:"S M L XL XXL",
    color: ["WHITE", "BLACK", "BLUE", "MOSTAZA"],
  },
  {
    titulo: "PRENDA",
    imgs: "prenda.jpeg",
    precio: 20,
    articulo: "230",
    descripcion: "",
    material: "",
    talles:"S M L XL XXL",
    color: ["WHITE", "BLACK", "BLUE", "MOSTAZA"],
  },
  {
    titulo: "PRENDA",
    imgs: "prenda.jpeg",
    precio: 20,
    articulo: "230",
    descripcion: "",
    material: "",
    talles:"S M L XL XXL",
    color: ["WHITE", "BLACK", "BLUE", "MOSTAZA"],
  },
];

const ListAlh = () => {
  return (
    <nav className="cardNav">
      {alh.map((item, index) => (
        <ListCard
        id={item.id}
        titulo={item.titulo}
        precio={item.precio}
        imgs={item.imgs}
        descripcion={item.descripcion}
        material={item.material}
        talles={item.talles}
        articulo={item.articulo}
        color={item.color}
        key={index}
      />
      ))}
    </nav>
  );
};

export default ListAlh;
