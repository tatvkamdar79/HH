import React from "react";
import { motion } from "framer-motion";
import doorHandle1 from "../Assets/doorHandle1.jpg";
import Products from "../Assets/Products.jpg";

const HomeProducts = () => {
  return (
    <div className="w-5/6 mx-auto my-10" id="products">
      <p className="text-4xl md:text-5xl lg:text-6xl font-playfair text-center lg:text-start underline decoration-yellow">
        About Our Products
      </p>
      <div className="grid grid-cols-1 font-playfair text-lg gap-y-10 my-10 md:px-5 lg:px-10 py-5">
        <motion.div
          className="flex flex-col lg:flex-row justify-center mx-auto place-items-center border-b-2 border-yellow pb-5 gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="h-full flex flex-col w-full lg:w-1/2 justify-evenly">
            <p className="flex flex-row text-3xl font-semibold underline underline-offset-2 decoration-yellow mb-5">
              Door Handles
            </p>
            <p className="w-full lg:w-11/12 pl-2">
              We have a wide variety of high-quality door handles from numerous
              brands available in our store. Choose from a diverse range of
              styles and finishes to match your preferences and needs. Our
              selection is designed to cater to a range of budgets without
              compromising on quality. With so many options to choose from,
              you're sure to find the perfect door handle to suit your style and
              budget at our store.
            </p>
          </div>
          <motion.div
            className="w-full lg:w-fit flex justify-center gap-x-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 350 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* <img src={doorHandle2} alt="" className="h-[300px] rounded-lg" /> */}
            <img src={doorHandle1} alt="" className="h-[300px] rounded-lg" />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row-reverse justify-center mx-auto place-items-center border-b-2 border-yellow pb-5 gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="h-full flex flex-col w-full lg:w-1/2 justify-evenly">
            <p className="lg:place-self-end text-3xl font-semibold underline underline-offset-2 decoration-yellow mb-5">
              Drawers
            </p>
            <p className="place-self-end w-full lg:w-11/12 pr-2 text-right">
              We offer a wide range of high-quality drawers to meet your needs.
              Our selection includes various sizes, styles, and materials from
              top brands. You can choose from our vast collection to find the
              perfect fit for your home or office. We take pride in offering
              excellent customer service and helping you find the perfect drawer
              solution. Shop with us today to experience our variety and quality
              firsthand.
            </p>
          </div>
          <motion.div
            className="w-full lg:w-fit flex justify-center gap-x-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -350 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* <img src={doorHandle2} alt="" className="h-[300px] rounded-lg" /> */}
            <img
              src={
                "https://5.imimg.com/data5/SELLER/Default/2020/8/HZ/BZ/CJ/10919030/wechat-image-20200208173157-1000x1000.jpg"
              }
              alt=""
              className="h-[300px] rounded-lg"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex flex-col gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -200 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-4xl font-playfair font-semibold text-center underline decoration-yellow underline-offset-2 w-fit place-self-center text-amber-600">
            OUR MOTTO
          </p>
          <p className="text-3xl font-playfair font-semibold text-center underline decoration-yellow underline-offset-2 text-teal-600 w-fit place-self-center">
            We Don't Just Sell Products, We Serve Customers.
          </p>
          <p className="w-full md:w-5/6 lg:w-2/3 mx-auto text-amber-700 text-center text-2xl font-bold">
            We take pride in offering a diverse range of hardware and house
            decor products to meet your needs. <br />
            Our selection is carefully curated to ensure that we offer only the
            <br />
            <b>
              <b className="text-orange-600">
                Highest Quality Products At Competitive Prices.
              </b>
            </b>{" "}
            <br />
            Browse our collection to find the perfect hardware and house decor
            items to enhance the functionality and aesthetic appeal of your
            space.
          </p>
          <motion.img
            src={Products}
            alt=""
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeProducts;
