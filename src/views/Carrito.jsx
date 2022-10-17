import { useContext } from "react";
import FormatNumber from "../utils";

import Context from "../context/Context";

function Carrito() {
  const context = useContext(Context);

  const cart = context.carrito.map((p) => {
    const pizza = context.pizzas.find((pizza) => pizza.id == p.id);
    return { ...pizza, cant: p.cant };
  });

  if (!cart) return;

  const totalByPizza = (cant, price) => {
    const total = FormatNumber(cant * price);
    return total;
  };

  const total = context.carrito.reduce((a, b) => {
    const pizza = context.pizzas.find((p) => p.id == b.id);
    const totalByPizza = b.cant * pizza.price;
    return a + totalByPizza;
  }, 0);

  const teacherAlert = () => {
    alert(
      "Bueno profe, a ver, implementar una pasarela de pago ya era pedir demasiado..."
    );
  };

  return (
    <div className="carrito p-10 flex justify-center">
      <div className="detalles p-7 w-3/4 bg-gray-100">
        <h5 className="text-2xl font-medium">Detalles del pedido:</h5>
        <div className="p-5 list">
          {cart.map((pizza, i) => (
            <div key={i} className="pizza mx-10 my-5">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center">
                  <img width="100" src={pizza.img} alt={pizza.name} />
                  <h6 className="mb-0 capitalize p-5 text-xl font-medium">
                    {pizza.name}
                  </h6>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <h6 className="mb-0 p-2 text-green-600 font-medium text-xl">
                    $ {totalByPizza(pizza.cant, pizza.price)}
                  </h6>
                  <div>
                    <button
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-2 py-1  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => context.minus(pizza.id)}
                    >
                      -
                    </button>
                    <b className="mx-2">{pizza.cant}</b>
                    <button
                      className="focus:outline-none text-white bg-blue-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => context.plus(pizza.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <hr className="mt-2" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-semibold">
          Total: $ {FormatNumber(total)}
        </h2>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-3 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-5"
          onClick={() => teacherAlert()}
        >
          Ir a pagar
        </button>
      </div>
    </div>
  );
}

export default Carrito;
