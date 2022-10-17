import { useState, useContext, useEffect } from "react";
import FormatNumber from "../utils";
import { useParams } from "react-router-dom";
import "../assets/css/Card.css";

import Context from "../context/Context";

const Detalle = () => {
  const context = useContext(Context);
  const { name } = useParams();

  const pizza = context.pizzas.find((p) => p.name == name);

  if (!pizza) return;

  return (
    <div className="flex justify-center detalle py-10 text-white font-alegreya">
      <div className="flex flex-col md:flex-row md:max-w-7xl rounded-lg bg-gray-900 bg-opacity-0 shadow-lg overflow-hidden">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg spin-pizza-detail"
          src={pizza.img}
          alt={pizza.name}
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-3xl font-semibold capitalize font-alegreyablack">
            {pizza.name}
          </h5>
          <hr className="mt-5 w-5/6 bg-gray-300 h-0.5" />
          <p className="flex flex-wrap w-5/6 mt-5">{pizza.desc}</p>
          <h5 className="text-xl mt-5 font-semibold">Ingredientes:</h5>
          <div className="flex flex-col ml-10 mt-5">
            <ul>
              {pizza.ingredients.map((ingredient, i) => (
                <li key={i} className="capitalize flex">
                  {" "}
                  <pre className="mr-1">🍕 </pre> {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between">
            <h2 className="text-3xl text-white font-semibold text-black mt-5">
              Precio: ${FormatNumber(pizza.price)}
            </h2>
            <a
              onClick={() => context.addToCart(pizza.id)}
              href="#"
              className="inline-flex items-center py-2 px-3 mx-5 text-md font-medium text-center bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Añadir 🛒
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
