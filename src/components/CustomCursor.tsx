"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Softer spring for the outer circle for a "lagging/trailing" effect
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px circle
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect if mouse is over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target or any of its parents is a link or button
      if (
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      <style>{`
        /* Hide the default cursor only on devices that support hover */
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Outer interactive trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 flex items-center justify-center hidden md:flex"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1,
            backgroundColor: isHovering ? "rgba(109, 40, 217, 0.8)" : "rgba(109, 40, 217, 0.4)",
            borderColor: isHovering ? "rgba(109, 40, 217, 0.5)" : "rgba(109, 40, 217, 1)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full h-full rounded-full border-2 border-primary backdrop-blur-[2px]"
        />
      </motion.div>

      {/* Inner sharp dot */}
      <motion.div 
         className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-50 hidden md:block glow-purple"
         style={{
           x: cursorX,
           y: cursorY,
           marginTop: 12, // (32 - 8)/2 to center inside the 32px outer circle
           marginLeft: 12
         }}
         animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
         }}
         transition={{ duration: 0.15 }}
      />
    </>
  );
}
