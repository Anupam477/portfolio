"use client";
import { motion, Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const ContactFooter = () => {
    // Animation variants for staggering
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <footer id="contact" className="py-32 px-8 md:px-24 border-t border-white/5 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
            
            {/* Background Orbs (Optimized for no lag) */}
            <motion.div 
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] pointer-events-none rounded-full translate-y-1/2" 
            />
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
              className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" 
            />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-[1000px] mx-auto text-center relative z-10 w-full"
            >
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                    <span className="px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-sans tracking-[0.2em] uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(109,40,217,0.1)]">
                        What&apos;s Next?
                    </span>
                </motion.div>
                 
                <motion.h2 variants={itemVariants} className="text-6xl md:text-[9rem] leading-[1.1] font-display font-medium tracking-tight mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-sm">
                    Let&apos;s work <br/> together.
                </motion.h2>
                 
                <motion.div variants={itemVariants} className="flex justify-center">
                    <a href="mailto:contact@anupam.com" className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
                        <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative font-bold tracking-[0.15em] uppercase text-sm z-10">Say Hello</span>
                        <div className="relative z-10 w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                            <FiArrowUpRight className="text-white text-lg group-hover:rotate-45 transition-transform duration-500" />
                        </div>
                    </a>
                </motion.div>
                 
                <motion.div variants={itemVariants} className="mt-32 pt-8 flex flex-col md:flex-row items-center justify-between border-t border-white/5 w-full text-white/40 text-xs tracking-widest uppercase font-sans gap-6 md:gap-0">
                    <div className="hover:text-white/80 transition-colors duration-300">© {new Date().getFullYear()} Anupam Kumar. All rights reserved.</div>
                    <div className="flex space-x-10">
                        {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                            <a key={platform} href="#" className="relative group overflow-hidden pb-1">
                                <span className="group-hover:text-white transition-colors duration-300">{platform}</span>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};
