import "../assets/css/Header.css";

function Header() {
  return (
    <div className="header flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-semibold">
        ¡Pizzería Mamma Mia!
      </h1>
      <h6 className="text-xl text-white font-semibold mt-5">
        ¡Tenemos las mejores pizzas que podrás encontrar!
      </h6>
      <hr className="my-8 w-1/2 h-px bg-gray-500 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default Header;
