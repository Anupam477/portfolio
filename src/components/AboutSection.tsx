"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaPaintBrush, FaDatabase } from "react-icons/fa";

export const AboutSection = () => {
    const skills = [
        { name: "Frontend (React / Next.js)", icon: FaLaptopCode },
        { name: "Backend (Node / Express)", icon: FaServer },
        { name: "TypeScript & JavaScript", icon: FaLaptopCode },
        { name: "UI/UX & Framer Motion", icon: FaPaintBrush },
        { name: "Database Design", icon: FaDatabase },
        { name: "Full Stack Architecture", icon: FaServer },
    ];

    return (
        <section id="about-us" className="min-h-screen py-24 px-8 md:px-24 relative flex items-center overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="space-y-8 flex-1 lg:pr-12">
                    <h2 className="text-4xl md:text-6xl font-display text-white font-medium">About <span className="text-primary">Me</span>.</h2>
                    <p className="text-gray-400 font-sans leading-relaxed text-lg">
                        I'm Anupam Kumar, a dedicated Full Stack Developer & Designer. With a strong foundation in modern web technologies, I specialize in architecting scalable and highly interactive applications—from robust travel platforms to comprehensive food-service dashboards.
                    </p>
                    <p className="text-gray-400 font-sans leading-relaxed text-lg">
                        I bridge the gap between complex backend logic and seamless frontend user experiences, ensuring every product is not just functional, but intuitively designed and optimized for performance.
                    </p>
                </motion.div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 items-center">
                     {skills.map((skill, i) => (
                         <motion.div key={skill.name} initial={{opacity:0, scale:0.9, y: 20}} whileInView={{opacity:1, scale:1, y: 0}} viewport={{once:true}} transition={{delay: i*0.1, duration:0.5}} className="p-6 md:p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-primary/[0.05] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(109,40,217,0.15)] transition-all duration-300 group gap-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 transition-colors duration-500 rounded-[1.5rem]"></div>
                            <skill.icon className="text-2xl text-gray-500 group-hover:text-primary transition-colors relative z-10" />
                            <span className="text-white/70 group-hover:text-white font-medium tracking-wide text-xs sm:text-sm relative z-10">{skill.name}</span>
                        </motion.div>
                     ))}
                </div>
            </div>
        </section>
    );
};
