import { motion } from "framer-motion";
import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testi = () => {
  return (
    <motion.div
    initial={{opacity:0,x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once: true}}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testi">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Patients{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
        Real stories from people who got treated by us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testi, index) => (
          <div
            key={index}
            className="max-w-sm border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testi.image}
              alt={testi.alt}
            />
            <h2 className="text-xl text-gray-800 font-medium">{testi.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testi.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testi.rating }).map((_, idx) => (
                <img key={idx} src={assets.star_icon} alt="Star" />
              ))}
            </div>
            <p className="text-gray-600">{testi.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testi;
