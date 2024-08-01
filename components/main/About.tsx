import React from "react";
import AboutText from "../sub/AboutText";
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex items-center gap-2 justify-center">
        <Image
          src="/logo-png.webp"
          alt="logo"
          width={18}
          height={18}
          className="cursor-pointer hover:animate-slowspin"
        />
        <Image
          src="/logo fif.png"
          alt="logo"
          width={25}
          height={25}
          className="cursor-pointer hover:animate-slowspin"
        />
        <Image
          src="/NavLogo.png"
          alt="logo"
          width={20}
          height={20}
          className="cursor-pointer hover:animate-slowspin"
        />
        <Image
          src="/AWS Cloud Club Logo Purple.png"
          alt="logo"
          width={35}
          height={35}
          className="cursor-pointer hover:animate-slowspin"
        />
      </div>
      <AboutText />
    </section>
  );
};

export default About;
