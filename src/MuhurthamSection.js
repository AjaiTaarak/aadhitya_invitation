import React from "react";
import { motion } from "framer-motion";
import { GiLotus } from "react-icons/gi";

const MuhurthamSection = () => (
  <motion.section
    className="px-6 py-8 bg-blue-50/60 rounded-xl shadow-sm relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay: 0.3 }}
  >
    <GiLotus className="absolute right-4 top-4 text-blue-300 text-2xl animate-pulse" />
    <h2 className="text-xl font-semibold text-pink-600 mb-2">Muhurtham</h2>
    <div className="mb-2">📅 <span className="font-medium">Date:</span> January 25, 2025</div>
    <div className="mb-2">🕗 <span className="font-medium">Time:</span> 7:00 AM to 9:00 AM</div>
    <div className="mb-4">📍 <span className="font-medium">Venue:</span> Lakshmi Kalyana Mandapam, Indiranagar, Bangalore</div>
    <a
      href="https://www.google.com/maps?q=Lakshmi+Kalyana+Mandapam+Bangalore"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition"
    >
      View on Google Maps
    </a>
  </motion.section>
);

export default MuhurthamSection; 