import { useContext } from "react";
import Context from "../context/Context";
import "../assets/css/Home.css";
import Pizza1 from "../assets/img/pizza1.gif";
import Spotify from "../assets/img/spotify.png";
import Header from "../components/Header";

function Home() {
  const { pizzas } = useContext(Context);
  return (
    <div>
      <Header />
      <div className="home flex flex-col md:flex-row grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="flex text-area flex-col mt-20 ml-5 md:ml-20">
          <h5 className="text-4xl md:text-6xl text-white headline font-alegreyablack">
            PIZZA AL CARBÓN
          </h5>
          <h5 className="text-3xl md:text-6xl headline text-white font-alegreyablack">
            <span className="main-text">
              COCKTAILS ASESINOS{" "}
              <span className="back-text glitch">COCKTAILS ASESINOS</span>{" "}
            </span>
          </h5>
          <h5 className="text-3xl md:text-6xl text-white font-alegreyablack">
            TODO SERVIDO CON UNA PLAYLIST DE AUTÉNTICO TERROR
          </h5>
          <a href="https://open.spotify.com/playlist/37i9dQZF1DX8S9gwdi7dev?si=a4c1b3ae3c5149a5">
            <img
              width="50"
              className="mt-10 cursor-pointer"
              src={Spotify}
              alt="spotify-logo"
            />
          </a>
        </div>
        <div className="img-area mt-12">
          <div className="spin-pizza">
            <img src={Pizza1} alt="pizza1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
