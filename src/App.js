import React from "react";
import "./index.css";
import HeroSection from "./HeroSection";
import GroomSection from "./GroomSection";
import BrideSection from "./BrideSection";
import ReceptionSection from "./ReceptionSection";
import MuhurthamSection from "./MuhurthamSection";
import RSVPSection from "./RSVPSection";

function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[420px] bg-white min-h-screen shadow-xl flex flex-col">
        <HeroSection />
        {/* Decorative Patterned Container with fade to white */}
        <div
          style={{
            height: '20vh',
            minHeight: '80px',
            width: '100%',
            position: 'relative',
            backgroundColor: '#FAF4EF',
            backgroundImage:
              'radial-gradient(#000 5%, #0000 6%), radial-gradient(#000 5%, #0000 6%)',
            backgroundPosition: '0 0, 1.5rem 1.5rem',
            backgroundSize: '3rem 3rem',
            overflow: 'hidden',
          }}
        >
          {/* White fade overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 100%)',
            }}
          />
        </div>
        <GroomSection />
        {/* Garland border between groom and bride sections */}
        <div className="w-full flex justify-center my-2">
          <img
            src={process.env.PUBLIC_URL + "/images/garland_border.png"}
            alt="Garland Border"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
        <BrideSection />
        <ReceptionSection />
        <MuhurthamSection />
        <RSVPSection />
      </div>
    </div>
  );
}

export default App;
