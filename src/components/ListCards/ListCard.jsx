import React, { useState } from "react";
import "./ListCard.css";

const ListCard = ({
  titulo,
  color,
  paleta,
  imgs,
  articulo,
  descripcion,
  material,
}) => {
  // Utiliza el estado local para gestionar el índice del slide actual.
  const [currentSlide, setCurrentSlide] = useState(0);
  // Utiliza el estado local para gestionar el colapso/expandir de la descripción.

  const [descripcionColapsoAbierto, setDescripcionColapsoAbierto] =
    useState(false);
  // Utiliza el estado local para gestionar el colapso/expandir del material.

  const [materialColapsoAbierto, setMaterialColapsoAbierto] = useState(false);

  // Función para mostrar/ocultar la descripción colapsable.

  const toggleDescripcionColapso = () => {
    setDescripcionColapsoAbierto(!descripcionColapsoAbierto);
    setMaterialColapsoAbierto(false);
  };
  // Función para mostrar/ocultar el material colapsable.

  const toggleMaterialColapso = () => {
    setMaterialColapsoAbierto(!materialColapsoAbierto);
    setDescripcionColapsoAbierto(false);
  };
  // Función para cambiar el índice del slide.
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  // Función para renderizar las imágenes según la cantidad.

  const renderImages = () => {
    if (Array.isArray(imgs) && imgs.length > 1) {
      // Renderiza un carrusel si hay más de una imagen.

      return (
        <div className="custom-carousel-container">
          <div
            className="custom-carousel-images"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.isArray(imgs) &&
              imgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="custom-carousel-image"
                />
              ))}
          </div>
          <div className="custom-carousel-dots">
            {Array.isArray(imgs) &&
              imgs.map((_, index) => (
                <div
                  key={index}
                  className={`custom-carousel-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => handleSlideChange(index)}
                >
                  <img src={imgs[index]} alt={`Dot ${index + 1}`} />
                </div>
              ))}
          </div>
        </div>
      );
    } else if (typeof imgs === "string") {
      // Renderiza una sola imagen si solo hay una.

      return <img src={imgs} alt={titulo} className="custom-card-image" />;
    }
    // Si no hay imágenes, devuelve null.

    return null;
  };

  return (
    <div className="custom-card-container">
      <div className="custom-card-content">
        {renderImages()}
        <div className="custom-card-text">
          <h3 className="custom-card-title">{titulo}</h3>
          <div className="custom-container-article">
            <h4 className="custom-card-article-list">ARTICULO:</h4>
            <p className="custom-card-article">{articulo}</p>
          </div>

          {/* Descripcion Colapso */}
          <div>
            <button
              className="custom-btn-colapso"
              onClick={toggleDescripcionColapso}
            >
              {descripcionColapsoAbierto ? "CERRAR" : "DESCRIPCION"}
            </button>
            <div
              className={`custom-colapso-content ${
                descripcionColapsoAbierto ? "abierto" : ""
              }`}
            >
              {descripcionColapsoAbierto && (
                <p className="custom-card-descripcion">{descripcion}</p>
              )}
            </div>
          </div>

          {/* Material Colapso */}
          <div>
            <button
              className="custom-btn-colapso"
              onClick={toggleMaterialColapso}
            >
              {materialColapsoAbierto ? "CERRAR" : "MATERIAL"}
            </button>
            <div
              className={`custom-colapso-content ${
                materialColapsoAbierto ? "abierto" : ""
              }`}
            >
              {materialColapsoAbierto && (
                <p className="custom-card-material">{material}</p>
              )}
            </div>
          </div>

          {/* Paleta de Colores o Colores en Stock */}
          <div className="custom-card-colors">
            <h4 className="custom-card-colors-title">
              {paleta ? "PALETA DE COLORES:" : "COLORES EN STOCK:"}
            </h4>
            {paleta && Array.isArray(paleta) ? (
              <div className="color-palette">
                {paleta.map((color, index) => (
                  <div
                    key={index}
                    className="color-box"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
            ) : (
              <div className="custom-color-circles-container">
                {Array.isArray(color) ? (
                  color.map((c, index) => (
                    <div
                      key={index}
                      className="custom-color-circle"
                      style={{ backgroundColor: c.toLowerCase() }}
                    ></div>
                  ))
                ) : (
                  <div
                    className="custom-color-circle"
                    style={{
                      backgroundColor: color
                        ? color.toLowerCase()
                        : "transparent",
                    }}
                  ></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
