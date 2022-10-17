import "./index.css";

import { BrowserRouter } from "react-router-dom";

import axios from "axios";
import PageLayout from "./layout/PageLayout";

import { useState, useEffect } from "react";
import Context from "./context/Context";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const addToCart = (pizzaId) => {
    const pizzaExist = carrito.find((p) => p.id == pizzaId);
    if (pizzaExist) {
      plus(pizzaId);
    } else {
      const pizza = { id: pizzaId, cant: 1 };
      setCarrito([...carrito, pizza]);
      alert("Pizza añadida al carrito!");
    }
  };

  const plus = (id) => {
    const carritoUpdate = carrito.map((p) => (p.id == id ? (p.cant++, p) : p));
    setCarrito(carritoUpdate);
  };

  const minus = (id) => {
    const { cant } = carrito.find((p) => p.id == id);
    let carritoUpdate;
    if (cant == 1) {
      carritoUpdate = carrito.filter((p) => p.id !== id);
    } else {
      carritoUpdate = carrito.map((p) => (p.id == id ? (p.cant--, p) : p));
    }
    setCarrito(carritoUpdate);
  };

  const globalState = {
    pizzas,
    setPizzas,
    carrito,
    setCarrito,
    addToCart,
    plus,
    minus,
  };

  useEffect(() => {
    axios.get("/pizzas.json").then((res) => {
      setPizzas(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};

export default App;
