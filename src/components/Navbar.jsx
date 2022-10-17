import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Context from "../context/Context";

export default function Navbar() {
  const context = useContext(Context);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const cartItemCount = () => {
    const total = context.carrito.map((p) => p.cant);
    const sum = total.reduce((a, value) => {
      return a + value;
    }, 0);
    return sum;
  };

  const total = cartItemCount();

  return (
    <nav className="flex min-w-full top-0 flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 z-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center lg:w-auto">
          <div className="flex items-center">
            <pre className="text-4xl">🍕 </pre>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-white text-3xl font-semibold"
                  : "text-white text-3xl font-semibold"
              }
              end
            >
              <p className="">Pizzeria Mamma Mia!</p>
            </NavLink>
          </div>
          <div>
            <span></span>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-white rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item flex">
              <NavLink
                to={"/Carrito"}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 flex items-center text-3xl font-bold leading-snug rounded-lg"
                    : "px-3 py-2 flex items-center text-3xl font-bold leading-snug"
                }
                end
              >
                🛒
              </NavLink>
              {total > 0 && <span className="mt-1 item-quant">{total}</span>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
