import React, { useState } from "react";
import "./ListCard.css";

const ListCard = ({
  titulo,
  color,
  imgs,
  articulo,
  descripcion,
  material,
  talles,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [descripcionColapsoAbierto, setDescripcionColapsoAbierto] =
    useState(false);
  const [materialColapsoAbierto, setMaterialColapsoAbierto] = useState(false);

  const toggleDescripcionColapso = () => {
    setDescripcionColapsoAbierto(!descripcionColapsoAbierto);
    // Cierra el otro colapso si está abierto
    setMaterialColapsoAbierto(false);
  };

  const toggleMaterialColapso = () => {
    setMaterialColapsoAbierto(!materialColapsoAbierto);
    // Cierra el otro colapso si está abierto
    setDescripcionColapsoAbierto(false);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const renderImages = () => {
    if (Array.isArray(imgs) && imgs.length > 1) {
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
      return <img src={imgs} alt={titulo} className="custom-card-image" />;
    }

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

          <div>
            <h4 className="custom-card-talles">TALLES:</h4>
            <p className="custom-card-talle-list">{talles}</p>
          </div>
          <div className="custom-card-colors">
            <h4 className="custom-card-colors-title">COLORES EN STOCK:</h4>
            <div className="custom-color-circles">
              {color && Array.isArray(color) ? (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
