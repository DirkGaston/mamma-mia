import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="about ml-5 mt-7 font-alegreya">
        <h1 className="text-white text-5xl">
          Bienvenido a la única pizzería vampírica del mundo
        </h1>
        <h2 className="text-white text-4xl mt-5">
          ¡Un verdadero apizzalipsis de sabor!
        </h2>
        <p className="text-white text-2xl w-1/2 mt-7">
          Nuestras pizzas son oscuras, como nuestras almas just like our souls.
          Añadimos una pizca de carbón vegetal a la masa cuando la hacemos en el
          día, para un potente sabor y la base de pizza más ligera y crujiente
          que probarás jamás.
        </p>
      </div>
    </div>
  );
}

export default About;
