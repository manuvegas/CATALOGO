import React from "react";
import CardSwetter from "./Card";

const listSwetter = [
  {
    id: 1,
    title: "Título de la prenda 1",
    article: "Código del artículo 1",
    price: "$XX",
    details: "Descripción detallada de la prenda 1",
    images: ['prenda.jpeg', 'prenda.jpeg']
  },
  {
    id: 2,
    title: "Título de la prenda 2",
    article: "Código del artículo 2",
    price: "$XX",
    details: "Descripción detallada de la prenda 2",
    images: ['prenda.jpeg', 'prenda.jpeg']
  }
];


const ListSwetter = () => {
  return (
    <div className="prendas-list">
      {listSwetter.map((item) => (
        <CardSwetter
          key={item.id}
          title={item.title}
          article={item.article}
          price={item.price}
          details={item.details}
          images={item.images}
        />
      ))}
    </div>
  );
};

export default ListSwetter;