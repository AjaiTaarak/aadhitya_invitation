import React from "react";
import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import RollingGallery from "./RollingGallery";

const ReceptionSection = () => (
  <motion.section
    className="shadow-sm relative"
    initial={{ opacity: 0, y: 40 }}
    style={{ backgroundColor: '#4B2E1E', color: '#ffe9e9' }}
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
      textClassName="text-5xl font-semibold mt-8 font-satisfy"
    >
      Reception
    </ScrollFloat>
    <RollingGallery autoplay={true} pauseOnHover={true} />
    <p className=" text-center w-full" style={{ color: '#ffe9e9', opacity: 0.9 }}>
      With love in our hearts and blessings from our families, we invite you to be part of a beautiful beginning at our wedding reception.
    </p>
    {/* Custom date/time layout */}
    <div className="flex items-center justify-center my-6">
      <div className="flex-1 border-t mx-2" style={{ borderColor: '#ffe9e9' }} />
      <div className="flex flex-col items-center px-2">
        <div className="text-xs tracking-widest font-semibold mb-1" style={{ color: '#ffe9e9', opacity: 0.8 }}>JULY</div>
        <div className="flex items-center">
          <div className="text-sm font-semibold mr-3" style={{ color: '#ffe9e9', opacity: 0.8 }}>SUNDAY</div>
          <div className="text-5xl font-bold mx-2" style={{ color: '#ffe9e9' }}>28</div>
          <div className="text-sm font-semibold ml-3" style={{ color: '#ffe9e9', opacity: 0.8 }}>AT 8AM</div>
        </div>
        <div className="text-xs tracking-widest font-semibold mt-1" style={{ color: '#ffe9e9', opacity: 0.8 }}>2024</div>
      </div>
      <div className="flex-1 border-t mx-2" style={{ borderColor: '#ffe9e9' }} />
    </div>
    <div className="flex justify-center">
    <button
        onClick={() => window.open("https://www.google.com/maps?q=Lakshmi+Kalyana+Mandapam+Bangalore", "_blank")}
        className="learn-more btn-reception">
        View directions
      </button>
    </div>
  </motion.section>
);

export default ReceptionSection; 