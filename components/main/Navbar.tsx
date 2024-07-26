'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { LiaTimesSolid } from 'react-icons/lia';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between fixed z-50 backdrop-blur-md">
      <div className="w-full flex justify-between items-center py-4 px-8 rounded-md container mx-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center gap-2 justify-start"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={20}
            height={20}
            className="cursor-pointer hover:animate-slowspin"
          />
          <p className="font-black ml-[10px] text-gray-300">Sircle R&D</p>
        </a>
        <RxHamburgerMenu
          color="white"
          className="cursor-pointer rounded text-xl md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-controls="menu"
          aria-expanded={isMenuOpen}
          aria-label="Open menu"
        />
        {isMenuOpen && (
          <div
            id="menu-mobile"
            className="fixed z-[99999] bg-black text-white h-[100vh] w-[100vw] left-0 top-0 p-4 py-6"
          >
            <div className="flex justify-between items-center px-4">
              <a
                href="#about-me"
                className="h-auto w-auto flex flex-row items-center"
              >
                <Image
                  src="/NavLogo.png"
                  alt="logo"
                  width={20}
                  height={20}
                  className="cursor-pointer hover:animate-slowspin"
                />
                <p className="font-bold ml-[10px] text-gray-300">Sircle R&D</p>
              </a>
              <LiaTimesSolid
                className="text-xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              />
            </div>
            <div className="p-8 h-full flex flex-col items-center justify-center gap-4 text-3xl">
              <a href="#home">Beranda</a>
              <a href="#about">Tentang Kami</a>
              <a href="#timeline">Timeline</a>
            </div>
          </div>
        )}

        <div className="hidden md:flex text-white gap-6 items-center">
          <a href="#home">Beranda</a>
          <a href="#about">Tentang Kami</a>
          <a href="#timeline">Timeline</a>
        </div>

        <div className="hidden md:flex text-white gap-4 items-center">
          <a
            href="https://github.com/SIRCLE-RnD" target="_blank"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxGithubLogo />
          </a>
          <a
            href="https://www.instagram.com/sircle.ittelkompwt/" target="_blank"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxInstagramLogo />
          </a>
          <a
            href="https://www.linkedin.com/company/sircle-research-and-development/" target="_blank"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxLinkedinLogo/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
