import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import "animate.css/animate.min.css";

const images = [{ id: uuidv4(), src: "/CATALOGO/invierno2024.jpg", to: "/Inv2024-Home" }];

const Inicio = () => {
  return (
    <main>
      <h1 className="flex justify-center items-center text-white text-3xl sm:text-5xl font-bold my-12">
       FOREST TEX 
      </h1>
      <section className="animate__animated animate__fadeInUp px-4 max-w-[700px] mx-auto">
        <Carousel className="carouselInicio mt-2 mb-2" controls={false} indicators={false}>
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <Link to={image.to}>
                <img
                  className="mx-auto w-[100%] "
                  src={image.src}
                  alt={`Slide ${image.id}`}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </main>
  );
};

export default Inicio;
