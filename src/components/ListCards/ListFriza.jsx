import React from "react";
import ListCard from "./ListCard";
import { prendas } from "./Prendas"
import { useParams } from "react-router-dom";

const ListFriza = () => {
  let {cardId} = useParams()
  let categorias =prendas.filter((prenda) => prenda.id === cardId);

  return (
    <>
    <nav className="cardNav">
      {prendas.map((item, index) => (
       <ListCard
       id={item.id}
       titulo={item.titulo}
       precio={item.precio}
       imgs={item.imgs}
       descripcion={item.descripcion}
       material={item.material}
       articulo={item.articulo}
       paleta={item.paleta}
       color={item.color}
       key={index}
     />
      ))}
    </nav></>
  );
};

export default ListFriza;
