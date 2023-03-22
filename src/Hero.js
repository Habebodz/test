import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <section className="hero-info">
          <h1>payment infrastracture for the internet</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            ipsa quo praesentium id recusandae porro facilis consectetur aut
            quibusdam quaerat!
          </p>
          <button className="btn">start now</button>
        </section>
        <section className="hero-images">
          <img src={phoneImg} alt="phone photo" className="phone-img" />
        </section>
      </div>
    </section>
  );
};

export default Hero;
