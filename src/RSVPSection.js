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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the RSVP submission here
    setDialogOpen(false);
    setName("");
    setGuests("1");
  };

  return (
    <motion.section
      className="px-6 py-8 flex flex-col items-center #ffe9e9 rounded-xl shadow-sm relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <CountdownCard />
      <button
        onClick={() => setDialogOpen(true)}
        className="btn-rsvp"
      >
        <span>I'll be there</span>
      </button>
      
      {/* RSVP Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className=" rounded-2xl shadow-lg p-8 w-full max-w-xs relative animate-fadeIn" style={{minWidth: 320, background:'#fdf8f2'}}>
            <button
              onClick={() => setDialogOpen(false)}
              style={{position: 'absolute', top: 16, right: 16, fontSize: 20, color: '#888', background: 'none', border: 'none', cursor: 'pointer'}}
              aria-label="Close dialog"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center" style={{letterSpacing: 1}}>RSVP</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-sm font-semibold">Name
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your Name"
                />
              </label>
              <label className="text-sm font-semibold">Number of guests
                <select
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="more">More than 3</option>
                </select>
              </label>
              <button type="submit" className="btn-rsvp mt-4"><span>Submit</span></button>
            </form>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default RSVPSection; 