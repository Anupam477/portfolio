"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-24 py-5 bg-black/40 backdrop-blur-xl border-b border-white/[0.08]"
    >
      <Link href="/" className="text-2xl font-display font-medium text-white tracking-widest hover:text-primary transition-colors duration-300">
        Anupam
      </Link>
      
      <div className="hidden md:flex items-center space-x-12">
        {["About Us", "Projects", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="group relative text-xs font-sans font-medium text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase py-2"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
