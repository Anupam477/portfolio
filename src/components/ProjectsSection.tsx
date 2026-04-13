"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectsSection = () => {
    const projects = [
        {
            name: "resume-analyzer",
            description: "Full stack project",
            url: "https://github.com/Anupam477/resume-analyzer",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "BharatYatra",
            description: "Full stack travel project",
            url: "https://github.com/Anupam477/BharatYatra",
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "khana-khajana-dish-dash",
            description: "Food application built with TypeScript",
            url: "https://github.com/Anupam477/khana-khajana-dish-dash",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "khanakajana",
            description: "Food service Web App",
            url: "https://github.com/Anupam477/khanakajana",
            image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-32 px-8 md:px-24 relative flex items-center overflow-hidden">
           {/* Center ambient glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
           
           <div className="max-w-[1100px] w-full mx-auto relative z-10">
               <motion.h2 initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-16 font-medium text-center md:text-left">Selected <span className="text-primary/70">Works</span></motion.h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                   {projects.map((project, index) => (
                       <motion.div key={project.name} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: index*0.1, duration:0.8}} className="group relative overflow-hidden rounded-[1.5rem] aspect-video bg-gray-900/50 border border-white/5 hover:border-primary/40 cursor-pointer shadow-lg hover:shadow-[0_0_40px_rgba(109,40,217,0.2)] transition-all duration-500">
                           <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                               <Image src={project.image} alt={project.name} fill className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-transform duration-1000 z-0 mix-blend-overlay" />
                               <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center backdrop-blur-sm mix-blend-color"></div>
                               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
                               
                               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20 font-sans group-hover:-translate-y-2 transition-transform duration-700">
                                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                                       <span className="px-6 py-2 border border-white/20 rounded-full text-white font-display text-xs tracking-widest backdrop-blur-md">VIEW REPO</span>
                                   </div>
                                   <h3 className="text-2xl md:text-4xl font-display font-medium text-white mb-2 uppercase tracking-wider glow-purple">{project.name.replace(/-/g, ' ')}</h3>
                                   <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-200 transition-colors">{project.description}</p>
                               </div>
                           </a>
                       </motion.div>
                   ))}
               </div>
           </div>
        </section>
    );
};
