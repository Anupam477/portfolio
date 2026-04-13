"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaDribbble, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const roles = [
  "Software Developer",
  "UI/UX Designer",
  "Frontend Engineer",
  "Creative Coder"
];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 md:px-24 pt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Social Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-8 md:left-12 flex flex-col space-y-6 z-10"
      >
        <SocialIcon Icon={FaLinkedinIn} href="https://www.linkedin.com/in/anupam-kumar-bb088a328" />
        <SocialIcon Icon={FaGithub} href="#" />
        <SocialIcon Icon={FaDribbble} href="#" />
        <SocialIcon Icon={FaTwitter} href="#" />
      </motion.div>

      {/* Main Content Split */}
      <div className="relative z-10 w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0 gap-8">
        
        {/* Left Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start"
        >
          <p className="text-primary font-display tracking-widest mb-4">HELLO, I'M</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-tight">
            Anupam <br /> Kumar
          </h1>
        </motion.div>

        {/* Center Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-center order-1 md:order-2 shrink-0 md:mx-4"
        >
            <div className="relative w-56 h-56 md:w-[22rem] md:h-[22rem] rounded-[2rem] overflow-hidden border border-white/5 bg-gradient-to-t from-gray-900 to-transparent glow-purple flex justify-center items-end">
                 {/* Provide the actual cropped image as profile.png in public folder */}
                 <Image src="/profile.png" alt="Anupam Kumar" fill className="object-cover object-top z-20 hover:scale-105 transition-transform duration-700" priority />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-30 pointer-events-none"></div>
            </div>
        </motion.div>

        {/* Right Typography */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
           className="flex-1 text-center md:text-right order-3 flex flex-col items-center md:items-end justify-center overflow-hidden"
        >
           <p className="text-primary font-display tracking-widest mb-4 uppercase">I am a</p>
           <div className="h-[40px] md:h-[72px] overflow-hidden relative w-full flex justify-center md:justify-end">
             <AnimatePresence mode="wait">
               <motion.h2
                 key={currentRoleIndex}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -50, opacity: 0 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
                 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white/90 leading-tight absolute"
               >
                 {roles[currentRoleIndex]}
               </motion.h2>
             </AnimatePresence>
           </div>
        </motion.div>

      </div>

      {/* Resume Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 right-8 md:right-12 z-10 hidden md:flex"
      >
        <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors tracking-widest font-sans uppercase">
          <span>Resume</span>
          <div className="w-6 h-6 border border-current flex items-center justify-center text-[10px] rounded-sm">P</div>
        </button>
      </motion.div>

    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
    <Icon size={20} />
  </a>
);
