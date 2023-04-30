import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex w-fit justify-center md:justify-start my-2 gap-7">
      <motion.a
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.3 + 0 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="rounded-md hover:scale-110 transition-all duration-300"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin
          size={32}
          className="rounded-md hover:scale-110 transition-all duration-300 hover:text-[#0077B5]"
        />
      </motion.a>
      <motion.a
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.3 + 0.1 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="rounded-md hover:scale-110 transition-all duration-300"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare
          size={32}
          className="rounded-md hover:scale-110 transition-all duration-300 hover:text-indigo-700"
        />
      </motion.a>
      <motion.a
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.3 + 0.2 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="rounded-md hover:scale-110 transition-all duration-300"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram
          size={32}
          className="rounded-md hover:scale-110 transition-all duration-300 hover:text-[#c64de4]"
        />
      </motion.a>
      <motion.a
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.3 + 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="rounded-md hover:scale-110 transition-all duration-300"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare
          size={32}
          className="rounded-md hover:scale-110 transition-all duration-300 hover:text-blue"
        />
      </motion.a>
    </div>
  );
};

export default SocialMediaIcons;
