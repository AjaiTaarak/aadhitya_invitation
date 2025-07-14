import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <motion.section
    className="relative w-full h-[75vh] min-h-[400px] flex items-end justify-end overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={process.env.PUBLIC_URL + "/images/couple_1.jpg"}
      alt="Couple"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
    />
    {/* Gradient overlay for text visibility */}
    <div className="absolute inset-0 z-10 pointer-events-none" style={{background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)"}} />
    <motion.div
      className="absolute bottom-8 right-8 z-20 text-right"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-satisfy text-pink-100 drop-shadow-lg mb-1">Ajai ❤️ Meera</h1>
      <span className="text-3xl md:text-3xl font-satisfy text-pink-200 mx-2">the couple.</span>
    </motion.div>
  </motion.section>
);

export default HeroSection; 