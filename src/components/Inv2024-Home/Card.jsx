import React from "react";
import { Link } from "react-router-dom";

const Card = ({ titulo, img }) => {
  return (
    <>
      <div className=" flex relative max-w-xs rounded overflow-hidden transition-transform duration-300 ease-in transform hover:scale-110">
        <Link to={`/ListPrendas/${titulo}`} className="block text-black">
          <div className="relative overflow-hidden">
            <img src={img} alt={titulo} className="object-cover w-[320px] h-[520px]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-3 rounded ">
            <h3 className="p-3 text-md inline-block rounded font-bold bg-gray-200">{titulo}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
