import React from "react";
import "./index.css";
import HeroSection from "./HeroSection";
import GroomSection from "./GroomSection";
import BrideSection from "./BrideSection";
import ReceptionSection from "./ReceptionSection";
import MuhurthamSection from "./MuhurthamSection";
import RSVPSection from "./RSVPSection";
import ScrollVelocity from "./ScrollVelocity";

function App() {
  return (

    <div className="min-h-screen flex justify-center" style={{ backgroundColor: '#fdf8f2' }}>
      <div className="w-full max-w-[420px] min-h-screen shadow-xl flex flex-col" style={{ backgroundColor: '#fdf8f2' }}>
        <HeroSection />
        {/* Decorative Patterned Container with fade to white */}
        <div
          style={{
            height: '20vh',
            minHeight: '100px',
            width: '100%',
            position: 'relative',
            backgroundColor: '#fdf8f2',
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
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgb(253,248,242) 100%)',
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
        <div style={{ position: "relative", width: "100%", paddingTop: "3rem", paddingBottom: "3rem", color: "#4B2E05" }}>
          <img
            src={process.env.PUBLIC_URL + "/images/paperback_bg.jpg"}
            alt="Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              pointerEvents: "none",
              userSelect: "none",
            }}
            aria-hidden="true"
            draggable="false"
          />
          {/* Top inner shadow */}
          
          <div style={{ position: "relative", zIndex: 2 }}>
            <ScrollVelocity
              texts={["மாங்கல்யம் ஆனந்தம் பரிசளிக்கும் நேரம்", "குடும்பம் கூடும் நம் வாழ்வின் புது பேரம்"]}
              velocity={60}
              className="custom-scroll-text"
            />
          </div>
        </div>
        <MuhurthamSection />
        <ReceptionSection />
        
        <RSVPSection />
      </div>
    </div>
  );
}

export default App;
