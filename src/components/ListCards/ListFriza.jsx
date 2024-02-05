import React from "react";
import ListCard from "./ListCard";
import { prendas } from "./Prendas";
import { useParams } from "react-router-dom";

const ListFriza = () => {
  const { id } = useParams();
  const categorias = prendas.filter((prenda) => prenda.id === id);

  
  return (
    <>
      <nav className="cardNav">
        {categorias.map((item) => (
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
            key={item.id}
          />
        ))}
      </nav>
    </>
  );
};

export default ListFriza;
