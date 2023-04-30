import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const goto = (id) => {
    let ele = document.getElementById(id);
    if (!ele) {
      ele = document.getElementById("home");
    }
    window.scrollTo({
      top: ele.offsetTop - 120,
      behavior: "smooth",
    });
  };
  return (
    <div className="border-b sticky top-0 bg-white z-50">
      <div className="flex flex-wrap place-items-center">
        <nav className="flex justify-between place-items-center w-screen px-10">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link to={"/"} className="text-3xl font-bold font-heading">
              {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
              <p className="text-5xl font-bold">HH.</p>
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex text-lg px-4 mx-auto font-semibold font-heading space-x-12 place-items-center font-playfair">
              <li>
                <p
                  onClick={() => goto("home")}
                  className="flex text-center hover:text-amber-400 transition-all duration-300 cursor-pointer"
                >
                  Home
                </p>
              </li>
              <li>
                <p
                  onClick={() => goto("about")}
                  className="flex text-center hover:text-amber-400 transition-all duration-300 cursor-pointer"
                >
                  About
                </p>
              </li>
              <li>
                <p
                  onClick={() => goto("products")}
                  className="flex text-center hover:text-amber-400 transition-all duration-300 cursor-pointer"
                >
                  Products
                </p>
              </li>
              <li>
                <p
                  onClick={() => goto("brands")}
                  className="flex text-center hover:text-amber-400 transition-all duration-300 cursor-pointer"
                >
                  Brands
                </p>
              </li>
              <li>
                <p
                  onClick={() => goto("contact")}
                  className="flex text-center hover:text-amber-400 transition-all duration-300 cursor-pointer"
                >
                  Contact
                </p>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <GiHamburgerMenu size={30} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
