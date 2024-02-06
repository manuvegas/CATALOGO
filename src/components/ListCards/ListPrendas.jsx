import React, { useState, useEffect } from "react";
import ListCard from "./ListCard";
import { useLocation, useParams } from "react-router-dom";

const ListPrendas = () => {
  const [prendas, setPrendas] = useState([]);
  const location = useLocation();
  const { titulo } = useParams();

  useEffect(() => {
    fetch(`../prendas.json`)
      .then((reponse) => reponse.json())
      .then((data) => {
        // Filtrar las prendas según el título de la categoría seleccionada
        const prendasFiltradas = data.filter(
          (item) => item.categoriaId === titulo
        );
        setPrendas(prendasFiltradas);
      })
      .catch((error) => console.error("error al cargar los datos:", error));
  }, [titulo]);



  return (
    <>
      <nav className="cardNav">
        {prendas.map((item) => (
          <ListCard
            id={item.id}
            titulo={item.titulo}
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

export default ListPrendas;
