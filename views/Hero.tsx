import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32 pt-20"
    >
      <div className="max-w-screen-2xl w-full mx-auto">
        <motion.p variants={itemVariants} className="text-gray-400 mb-6 text-sm md:text-base lg:text-lg tracking-widest uppercase font-medium">
          Frontend Engineer &bull; Creative Developer
        </motion.p>
        
        <div className="overflow-hidden">
            <motion.h1 variants={itemVariants} className="text-[3.5rem] leading-[1] md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold tracking-tighter md:leading-[1.1] mb-4">
            I’m Ronak <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Kanojia.</span>
            </motion.h1>
        </div>
        
        <div className="overflow-hidden">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-gray-400 tracking-tighter leading-[1.1] mb-12 max-w-5xl">
            Crafting sleek, animated <br className="hidden md:block" /> digital experiences.
            </motion.h2>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-4 md:mt-8">
            <button 
                onClick={onExplore}
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden w-full md:w-auto text-center"
            >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Selected Work</span>
                <div className="absolute inset-0 bg-neutral-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for freelance
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;