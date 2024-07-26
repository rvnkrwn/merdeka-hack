'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import TimelineRPLM from '../sub/TimelineRPLM';
import TimelineTI from '../sub/TimelineTI';

const Timeline = () => {
  return (
    <div id="timeline" className="flex flex-col items-center justify-center min-h-screen w-full h-full py-10">
      <motion.div
        variants={slideInFromTop(0.5)}
        className="text-4xl font-medium text-center text-white mb-8"
      >
        Timeline
      </motion.div>
      <div className="relative w-full max-w-4xl mx-auto">
        <TimelineRPLM />
        <TimelineTI />
      </div>
    </div>
  );
};

export default Timeline;
