import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegSmileBeam } from "react-icons/fa";

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
      className="px-6 py-8 flex flex-col items-center bg-pink-50/60 rounded-xl shadow-sm relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <FaRegSmileBeam className="text-pink-400 text-3xl mb-2 animate-pulse" />
      <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-pink-700 transition mb-4">
        RSVP Now
      </button>
      <div className="text-gray-700 text-center">
        <span className="font-medium">Countdown to Reception:</span>
        <div className="text-2xl font-bold mt-2">
          {timeLeft ? (
            <span>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          ) : (
            <span className="text-pink-600">It's time to celebrate!</span>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection; 