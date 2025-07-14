import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";

const ReceptionSection = () => (
  <motion.section
    className="px-6 py-8 rounded-xl shadow-sm relative"
    initial={{ opacity: 0, y: 40 }}
    style={{ backgroundColor: '#fdf8f2' }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
     <ScrollFloat
      animationDuration={0.5}
      ease="back.inOut(2)"
      scrollStart="center bottom+=100%"
      scrollEnd="bottom bottom-=20%"
      stagger={0.01}
      containerClassName="mb-2 text-center w-full"
      textClassName="text-4xl font-semibold text-pink-600 font-satisfy"
    >
      Reception
    </ScrollFloat>
    {/* Custom date/time layout */}
    <div className="flex items-center justify-center my-6">
      <div className="flex-1 border-t border-[#b18597] mx-2" />
      <div className="flex flex-col items-center px-2">
        <div className="text-xs tracking-widest text-[#b18597] font-semibold mb-1">JULY</div>
        <div className="flex items-center">
          <div className="text-sm font-semibold text-[#b18597] mr-3">SUNDAY</div>
          <div className="text-5xl font-bold text-[#8b2042] mx-2">28</div>
          <div className="text-sm font-semibold text-[#b18597] ml-3">AT 8AM</div>
        </div>
        <div className="text-xs tracking-widest text-[#b18597] font-semibold mt-1">2024</div>
      </div>
      <div className="flex-1 border-t border-[#b18597] mx-2" />
    </div>
    <div className="flex justify-center">
      <button
        onClick={() => window.open("https://www.google.com/maps?q=The+Grand+Courtyard+Bangalore", "_blank")}
        className="learn-more"
      >
        View directions
      </button>
    </div>
  </motion.section>
);

export default ReceptionSection; 