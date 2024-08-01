'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop(0.5)}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">About MerdekaHack</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Commemoration of Indonesian independence
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-gray-200 mb-10 mt-[10px] text-center max-w-[60rem]"
      >
        <motion.p className="font-semibold">
          MerdekaHack by Sircle adalah sebuah inisiatif yang bertujuan untuk
          meningkatkan kreativitas dan keterampilan mahasiswa dalam rangka
          merayakan Hari Kemerdekaan Indonesia. Acara ini dirancang untuk
          menggabungkan semangat kemerdekaan dengan inovasi teknologi melalui
          serangkaian kompetisi menarik dan menantang. Kami mengundang para
          mahasiswa dari seluruh Indonesia untuk ikut serta dalam dua kategori
          lomba yang kami tawarkan, yang masing-masing dirancang untuk menguji
          keterampilan dan kreativitas mereka:
        </motion.p>
        <br />
        <motion.h2 className="font-black text-xl">
          Web Development Competition
        </motion.h2>
        <motion.p className="font-semibold">
          Jika Anda memiliki minat dan bakat dalam desain web, Web Development Competition adalah kesempatan sempurna untuk Anda. Dalam lomba
          ini, peserta ditantang untuk merancang dan mengembangkan halaman
          landing page yang menarik, fungsional, dan responsif. Lomba ini
          bertujuan untuk mendorong kreativitas dalam menciptakan antarmuka
          pengguna yang estetis dan intuitif. Kami mencari desain yang tidak
          hanya menarik secara visual tetapi juga memberikan pengalaman pengguna
          yang luar biasa.
        </motion.p>
        <br />
        <motion.h2 className="font-black text-xl">
          Capture the Flag Competition
        </motion.h2>
        <motion.p className="font-semibold">
          Bagi Anda yang suka dengan tantangan dan memiliki kemampuan dalam
          bidang keamanan siber, Lomba Capture the Flag Competition adalah
          tempatnya. Kompetisi ini menuntut peserta untuk menyelesaikan berbagai
          tantangan dan teka-teki yang dirancang untuk menguji kemampuan dalam
          mencari celah keamanan dan memecahkan masalah teknis yang kompleks.
          Lomba CTF ini adalah ajang yang sempurna bagi mereka yang ingin
          mengasah keterampilan hacking etis dan menunjukkan kemampuan mereka
          dalam melindungi sistem informasi.
        </motion.p>
        <br />
        <motion.h2 className="font-black text-xl">
          Mengapa MerdekaHack?
        </motion.h2>
        <motion.p>
          MerdekaHack bukan hanya sekadar kompetisi; ini adalah kesempatan untuk
          belajar, berkembang, dan berinovasi. Peserta akan memiliki kesempatan
          untuk berinteraksi dengan rekan-rekan sejawat dari berbagai latar
          belakang, berbagi ide, dan membangun jaringan profesional yang
          berharga. Selain itu, kompetisi ini juga menawarkan hadiah menarik
          bagi pemenang dan pengakuan atas usaha dan dedikasi mereka.
          Bergabunglah dengan MerdekaHack by Sircle dan tunjukkan kemampuan Anda
          dalam merancang dan menyelesaikan tantangan teknologi. Jadilah bagian
          dari perayaan kemerdekaan Indonesia yang inovatif dan inspiratif.
        </motion.p>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="grid grid-cols-5 gap-8 items-center"
      ></motion.div>
    </div>
  );
};

export default SkillText;
