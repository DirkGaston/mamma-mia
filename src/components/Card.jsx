import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FormatNumber from "../utils";
import Context from "../context/Context";

const Card = ({ pizza }) => {
  const navigate = useNavigate();
  const context = useContext(Context);

  const goToDetailPage = () => {
    navigate(`/pizza/${pizza.name}`);
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm home-card">
        <img className="rounded-t-lg" src={pizza.img} alt={pizza.name} />
        <div className="p-6">
          <h5 className="text-gray-900 text-2xl font-medium mb-2 capitalize">
            {pizza.name}
          </h5>
          <hr className="my-5 w-5/6 h-px bg-gray-300 border-0 dark:bg-gray-700" />
          <p className="mb-3 text-black font-bold dark:text-gray-400">
            Ingredientes:
          </p>
          <div className="flex flex-col w-1/2 items-center">
            <ul>
              {pizza.ingredients.map((ingredient, i) => (
                <li key={i} className="capitalize flex">
                  <pre className="mr-1">🍕 </pre> {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full justify-center mt-7">
            <a
              onClick={goToDetailPage}
              className="inline-flex items-center py-2 px-3 mx-5 text-sm font-medium text-center text-white bg-cyan-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver más 👀
            </a>
            <a
              onClick={() => context.addToCart(pizza.id)}
              className="inline-flex items-center py-2 px-3 mx-5 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Añadir 🛒
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
