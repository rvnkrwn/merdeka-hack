'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    const targetDate = new Date('August 1, 2024 00:00:00').getTime();
    const registrationEndDate = new Date('August 10, 2024 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (now >= targetDate && now < registrationEndDate) {
        setShowRegistration(true);
      } else {
        setShowRegistration(false);
      }

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center px-20 mt-36 mb-20 w-full z-[20]"
    >
      <div className="h-full w-fit flex flex-col gap-2 justify-center m-auto text-center mx-auto">
        <motion.div
          variants={slideInFromTop(1)}
          className="Welcome-box py-[8px] px-[12px] flex gap-2 w-fit mx-auto border border-[#7042f88b] opacity-[0.9]"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={12}
            height={12}
            className="cursor-pointer hover:animate-slowspin"
          />
          <h1 className="Welcome-text text-[13px]">Sircle Competition Event</h1>
        </motion.div>

        <motion.div
          variants={slideInFromBottom(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl font-bold">
            ~ MerdekaHack ~
          </span>
        </motion.div>

        <motion.p
          className="text-5xl text-gray-400 my-5 max-w-[600px] leading-[3.5rem] font-black tracking-wide"
        >
          <motion.span variants={slideInFromTop(1.4)} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Ultimate</motion.span>
          {" "}
          <motion.span variants={slideInFromBottom(1.1)} className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">CTF</motion.span>
          {" "}
          <motion.span variants={slideInFromTop(1.2)}>&</motion.span>
          {" "}
          <motion.span variants={slideInFromBottom(1.3)} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-orange-500">Landing Page Development</motion.span>
          {" "}
          <motion.span variants={slideInFromTop(1.4)} className="from-purple-500 to-cyan-500">by</motion.span>
          {" "}
          <motion.span variants={slideInFromBottom(1.5)} className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Sircle</motion.span>
        </motion.p>

        {showRegistration ? (
          <motion.div className="flex flex-col items-center gap-6">
            <motion.a
              variants={slideInFromTop(1.4)}
              href="https://ittp.id/merdekahack-regist" // Ganti dengan link form pendaftaran WEB DEV
              className="py-2 button-primary text-center text-white cursor-pointer mx-auto px-10 rounded-lg max-w-[220px]"
            >
              Daftar Sekarang
            </motion.a>
          </motion.div>
        ) : (
          <motion.div
            variants={slideInFromTop(1)}
            className="py-2 button-primary text-center text-white mx-auto px-10 rounded-lg max-w-[220px]"
            id="countdown"
          >
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </motion.div>
        )}
        <motion.div
          variants={slideInFromBottom(1.2)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <a
            href="#about"
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-sm underline"
          >
            Baca lebih...
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
