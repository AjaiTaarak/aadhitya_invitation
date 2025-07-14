import React from "react";
import { motion } from "framer-motion";
import { GiPartyPopper } from "react-icons/gi";

const ReceptionSection = () => (
  <motion.section
    className="px-6 py-8 bg-yellow-50/60 rounded-xl shadow-sm relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <GiPartyPopper className="absolute left-4 top-4 text-yellow-400 text-2xl animate-bounce" />
    <h2 className="text-xl font-semibold text-pink-600 mb-2">Reception</h2>
    <div className="mb-2">📅 <span className="font-medium">Date:</span> January 24, 2025</div>
    <div className="mb-2">🕖 <span className="font-medium">Time:</span> 6:30 PM onwards</div>
    <div className="mb-4">📍 <span className="font-medium">Venue:</span> The Grand Courtyard, MG Road, Bangalore</div>
    <a
      href="https://www.google.com/maps?q=The+Grand+Courtyard+Bangalore"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition"
    >
      View on Google Maps
    </a>
  </motion.section>
);

export default ReceptionSection; 