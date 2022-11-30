import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61GGOdqTzYL._SX1500_.jpg"
          alt="amazon home"
        />

        <div className="home__row">
          <Product
            id="456788"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="4846788"
            title="Donerton Gaming Headset, Over-Ear Gaming Headphones with Noise Canceling Mic, Stereo Bass Surround Sound, Soft Memory Earmuffs LED Light PS4 Gaming Headset Compatible with PC, Laptop, PS4, PS5, Red"
            price={24.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71bQEixGzhL._AC_SY355_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="48467858"
            title="Amazon Basics Ergonomic Gaming Chair with Bluetooth Speakers and Built-in Mic, Push-Button Height Control - Red"
            price={230.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71MtgeQPRtS._AC_SY355_.jpg"
            rating={4}
          />
          <Product
            id="4754467858"
            title="Amazon Basics Mesh, Mid-Back, Adjustable, Swivel Office Desk Chair with Armrests, Black"
            price={239.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91vH3ZqS2sL._AC_SY355_.jpg"
            rating={2}
          />
          <Product
            id="4846752858"
            title="Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black"
            price={23.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/8189uwDnMkL._AC_SY450_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="4825446752858"
            title="Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
            price={99.91}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71rXSVqET9L._AC_SX450_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
