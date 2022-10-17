import "../assets/css/Header.css";
import logo2 from "../assets/img/Logo2.mp4";
import neonBlood from "../assets/img/giphy.gif";
import powerSwitch from "../assets/img/power.gif";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer flex justify-between crt scanlines">
      <div className="flex header">
        <NavLink to={"/"}>
          <video
            src={logo2}
            width="100%"
            heigth="auto"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </NavLink>

        <img
          src={neonBlood}
          className="neon-blood hidden md:block"
          alt="neon-blood-gif"
        />
      </div>
    </div>
  );
}

export default Header;
