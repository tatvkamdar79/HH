import React from "react";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="grid justify-center place-items-center pt-10 lg:pt-0 p-4 border min-h-[90vh]"
      id="home"
    >
      <div className="flex flex-col gap-y-6 lg:flex-row w-full h-5/6 justify-evenly place-items-center">
        <motion.div
          className="h-fit w-5/6 lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src="https://surfacesreporter.com/myuploads/square/20200703231618.jpg"
            alt="Company"
            className="lg:w-5/6 mx-auto border-2 rounded-md border-yellow shadow-lg"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -150 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col place-items-center lg:place-items-start w-11/12 lg:w-1/2 gap-y-2"
        >
          <div className="flex lg:flex-col w-full lg:w-5/6 gap-x-3 justify-center">
            <p className="text-3xl md:text-5xl lg:text-6xl font-playfair text-center lg:text-start">
              Hyderabad
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl font-playfair text-center lg:text-start xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[30px] before:-top-[70px] before:z-[-1]">
              Hardware
            </p>
          </div>
          <p className="text-lg text-center lg:text-start font-semibold font-playfair underline underline-offset-2 w-5/6">
            About us
          </p>
          <p className="text-justify lg:text-start text-md w-full lg:w-5/6">
            Hyderabad Hardware is a <b>Leading Hardware Importer</b> based in
            Hyderabad, India. <b>Founded in 2000,</b> we started as a small
            wholesale business in <b>Mozamjahi Market</b> near Karachi Bakery,
            Hyderabad.
            <br />
            <br />
            <b>Hyderabad Hardware</b> quickly gained a reputation as{" "}
            <b>Hyderabad's First Hardware Importer</b> and ran very successfully
            due to high demand, with the business remaining open until late
            hours to cater to customers.
            <br />
            <br />
            As a business, <b>
              We Prioritize Our Customers Above All Else.
            </b>{" "}
            Our <b>Customer-Centric Approach</b> has been a key factor in our
            success, and we're committed to catering to our customers' needs to
            ensure their satisfaction. You are at the forefront of everything we
            do.
            <br />
            <b>
              We Are Dedicated to providing you with the Highest Quality
              Products and Services.
            </b>
          </p>
          <SocialMediaIcons />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
