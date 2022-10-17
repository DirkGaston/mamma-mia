import Card from "../components/Card";
import { useContext } from "react";
import Context from "../context/Context";
import Header from "../components/Header";

function Menu() {
  const { pizzas } = useContext(Context);
  return (
    <div>
      <Header />
      <div className="home flex flex-col justify-center crt">
        <div className="flex flex-wrap justify-center py-10 pizzas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pizzas.map((pizza, i) => (
            <div key={i} className="pizza mx-10 my-5">
              <Card pizza={pizza} />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
