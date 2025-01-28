import "./Hero.css";
import { IconContext } from "react-icons";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-image ">
        {" "}
        {/* Esquerda */}
        <img
          className="rounded-lg p-4"
          src="https://picsum.photos/200"
          alt="photo"
        />
      </div>

      <div className="hero-title p-2">
        {" "}
        {/* Direita */}
        <h2>Almir</h2>
        <p>CREFI: 000000</p>
        <div>
          <div className="flex">
            <IconContext.Provider
              value={{ color: "#128c7e", size: "1.7rem", className: "hero-icon" }}
            >
              <a href="https://wa.me/+17185516802?text=Oi%2C+quero+mais+informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer">
                <IoLogoWhatsapp />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ color: "#c13584", size: "2rem", className: "hero-icon" }}
            >
              <a href="https://www.instagram.com/almir.troina" target="_blank" rel="noreferrer">
                <IoLogoInstagram />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
