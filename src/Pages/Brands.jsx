import React from "react";
import hettich from "../Assets/hettich.svg";
import blum from "../Assets/blum.png";
import labacha from "../Assets/labacha.jpg";
import godrej from "../Assets/godrej.png";
import hafele from "../Assets/hafele.webp";

const Brands = () => {
  return (
    <div
      className="w-5/6 min-h-[90vh] mx-auto flex flex-col justify-evenly gap-y-10"
      id="brands"
    >
      <p className="text-6xl underline decoration-yellow font-playfair font-semibold">
        Brands
      </p>
      <p className="w-full lg:w-5/6 mx-auto text-2xl font-playfair text-amber-800 text-center">
        We've forged strong partnerships with some of the industry's top brands,
        including <b className="text-orange-500">Blum</b>,{" "}
        <b className="text-black font-sans font-bold">Hettich</b>,{" "}
        <b className="text-[rgb(185,7,93)] font-signature">Godrej</b>, and more.
        <br />
        As a Recognized Distributor of their Products, we have <br />
        <b className="text-rose-700">
          Exclusive access to their premium hardware and house decor items.
        </b>{" "}
        <br />
        Browse our collection to find the perfect products for your needs and
        experience the quality and value of our offerings.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 place-items-center gap-y-5">
        <img src={hettich} alt="" className="w-[200px] h-[100px]" />
        <img src={blum} alt="" className="w-[200px] h-[1    00px]" />
        <img src={godrej} alt="" className="w-[200px] h-[100px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 place-items-center w-5/6 mx-auto gap-y-5">
        <img src={labacha} alt="" className="w-[200px] h-[100px]" />
        <img src={hafele} alt="" className="w-[200px] h-[100px]" />
      </div>
    </div>
  );
};

export default Brands;
