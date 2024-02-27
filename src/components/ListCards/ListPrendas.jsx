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
      <h1 className="flex justify-center items-center text-black pt-5 text-3xl sm:text-5xl font-extrabold">
        {titulo}
      </h1>
      <nav className="flex flex-row flex-wrap gap-3 pt-10 pb-10 mx-auto max-w-[1800px]">
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
            categoria={titulo}
          />
        ))}
      </nav>
    </>
  );
};

export default ListPrendas;
