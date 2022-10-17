import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Menu from "../views/Menu";
import Detalle from "../views/Detalle";
import Carrito from "../views/Carrito";
import NotFound from "../views/NotFound";

function MainLayout() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nosotros" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/pizza/:name" element={<Detalle />} />
        <Route exact path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainLayout;
