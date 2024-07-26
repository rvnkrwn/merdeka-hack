import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div id="home" className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute top-[200px] h-full w-full left-0 -z-10 object-cover opacity-25"
      >
        {/* <source src="/blackhole.webm" type="video/webm" /> */}
        <source src="/cards-video.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
