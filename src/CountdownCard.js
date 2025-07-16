import React, { useEffect, useState } from "react";
import "./CountdownCard.css";

function getDaysLeft() {
  const now = new Date();
  const currentYear = now.getFullYear();
  let weddingDate = new Date(`${currentYear}-07-28T00:00:00`);
  // If today is after July 28, use next year
  if (now > weddingDate) {
    weddingDate = new Date(`${currentYear + 1}-07-28T00:00:00`);
  }
  const diff = weddingDate - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days < 10 ? `0${days}` : `${days}`;
}

const CountdownCard = () => {
  const [daysLeft, setDaysLeft] = useState(getDaysLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(getDaysLeft());
    }, 1000 * 60 * 60); // update every hour
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden mt-12">
      {/* Big number with image cutout */}
      <div className="relative flex flex-col items-center">
        <span
          className="countdown-cutout text-[10rem] md:text-[12rem] font-rubik-mono leading-none select-none tracking-[-0.25em] px-4"
          style={{
            backgroundImage: "url('/images/countdownbg_1.jpg')",
            overflow: "visible",
            display: "inline-block",
          }}
        >
          {daysLeft}
        </span>
        <span className=" text-4xl md:text-4xl font-satisfy font-bold text-[#4B2E1E] text-center">
          Days to go!
        </span>
      </div>
      {/* Text below */}
      <div className="mt-4 flex flex-col items-center">
       
        <div className="text-base md:text-lg  text-[#4B2E1E] opacity-80 text-center mb-4">
         Your presence means the world to us—let us know if you’ll be there!
        </div>
      </div>
    </div>
  );
};

export default CountdownCard; 