import "../assets/css/Header.css";
import logo2 from "../assets/img/Logo2.mp4";
import neonBlood from "../assets/img/giphy.gif";
import powerSwitch from "../assets/img/power.gif";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header flex justify-between crt scanlines">
      <div className="flex">
        <NavLink to={"/"}>
          <video
            src={logo2}
            width="400"
            heigth="400"
            autoPlay
            loop
            playsInline
            muted
            poster
          ></video>
        </NavLink>

        <img src={neonBlood} alt="neon-blood-gif" />
      </div>

      {/* <h1 className="text-5xl text-white font-semibold">
        ¡Pizzería Mamma Mia!
      </h1>
      <h6 className="text-xl text-white font-semibold mt-5">
        ¡Tenemos las mejores pizzas que podrás encontrar!
      </h6> */}
      {/* <hr className="my-8 w-1/2 h-px bg-gray-500 border-0 dark:bg-gray-700" /> */}
    </div>
  );
}

export default Header;
