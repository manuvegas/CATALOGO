import React, { useState } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/react";

const ListCard = ({
  titulo,
  color,
  paleta,
  imgs,
  articulo,
  descripcion,
  material,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchMove = (e) => {
    if (!touchPosition) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      setCurrentSlide((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }

    if (diff < -5) {
      setCurrentSlide((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    }

    setTouchPosition(null);
  };

  const renderImages = () => {
    if (Array.isArray(imgs) && imgs.length > 1) {
      return (
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="object-cover flex-shrink-0"
              />
            ))}
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <Pagination
              total={imgs.length}
              initialPage={currentSlide + 1}
              onChange={(page) => handleSlideChange(page - 1)}
              variant="flat"
              className={{ cursor: "bg-dark" }}
              simple
            >
              {imgs.map((_, index) => (
                <PaginationItem key={index} />
              ))}
              <PaginationCursor />
            </Pagination>
          </div>
        </div>
      );
    } else if (typeof imgs === "string") {
      return <img src={imgs} alt={titulo} className="object-cover w-full" />;
    } else if (paleta && Array.isArray(paleta)) {
      const hasImages = paleta.some(
        (item) => typeof item === "object" && item.img
      );

      if (hasImages) {
        return (
          <div className="flex items-center justify-center flex-wrap max-h-90px overflow-y-auto">
            {paleta.map((item, index) => {
              if (typeof item === "object" && item.img) {
                return (
                  <div
                    key={index}
                    className="w-10 h-10 mr-2 mb-2 rounded-full"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                );
              } else {
                return null; // O puedes manejar colores si es necesario
              }
            })}
          </div>
        );
      } else {
        // Aquí puedes manejar el caso de la paleta de colores si es necesario
        return null;
      }
    }
  };

  return (
    <>
      <div className="p-3 text-white flex w-[550px] mx-auto shadow-lg rounded overflow-hidden animate__animated animate__fadeInLeft bg-neutral-950">
        <div className="flex flex-col flex-1">
          {renderImages()}
          <div className="flex flex-col p-2 gap-3">
            <h3 className="text-3xl font-extrabold text-center">{titulo}</h3>
            <div className="flex flex-row items-center ">
              <h4 className="text-lg p-2 bg-[rgb(13,13,13)] inline-block">
                ARTÍCULO:
              </h4>
              <p className="ml-5 text-4xl font-semibold">{articulo}</p>
            </div>

            {descripcion && (
              <div>
                <h4 className="text-lg p-2 bg-[rgb(13,13,13)] inline-block">
                  DESCRIPCION:
                </h4>
                <p className="mt-2 w-96">{descripcion}</p>
              </div>
            )}

            {material && (
              <div>
                <h4 className="text-lg p-2 bg-[rgb(13,13,13)] inline-block">
                  MATERIA PRIMA:
                </h4>
                <p className="mt-2">{material}</p>
              </div>
            )}

            <div className=" flex flex-col">
              <h4 className="text-lg p-2 bg-[rgb(13,13,13)] text-center w-52 mb-3">
                {paleta ? "PALETA DE COLORES:" : "COLORES EN STOCK:"}
              </h4>
              {paleta && Array.isArray(paleta) ? (
                <div className="flex flex-col items-center">
                  {paleta.map((color, index) => (
                    <div
                      key={index}
                      className="w-60 h-16 rounded-md"
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center flex-wrap max-h-90px overflow-y-auto">
                  {Array.isArray(color) ? (
                    color.map((c, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 mr-2 mb-2 rounded-full"
                        style={{ backgroundColor: c.toLowerCase() }}
                      ></div>
                    ))
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full"
                      style={{
                        backgroundColor: color
                          ? color.toLowerCase()
                          : "transparent",
                      }}
                    ></div>
                  )}
                </div>
              )}
              {!paleta && !color && (
                <p className="text-lg p-2 bg-[rgb(13,13,13)] text-center">
                  TODAS LAS VARIANTES EN FOTO
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
