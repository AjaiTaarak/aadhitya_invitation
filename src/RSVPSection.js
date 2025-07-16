import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegSmileBeam } from "react-icons/fa";
import CountdownCard from "./CountdownCard";

const targetDate = new Date("2025-01-24T18:30:00+05:30").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const diff = targetDate - now;
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const RSVPSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="px-6 py-8 flex flex-col items-center #ffe9e9 rounded-xl shadow-sm relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <CountdownCard />
      <div className="flex justify-center">
        <button
          onClick={() => window.open("https://www.google.com/maps?q=Lakshmi+Kalyana+Mandapam+Bangalore", "_blank")}
          className="btn-rsvp"
        >
          <span>I'll be there</span>
        </button>
      </div>
    </motion.section>
  );
};

export default RSVPSection; 