import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col justify-between"
    >
      <div className="max-w-[1600px] mx-auto w-full flex-grow flex flex-col justify-center">
        <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 uppercase tracking-widest mb-8 text-sm md:text-base font-medium"
        >
            What's Next?
        </motion.p>
        
        <motion.h2 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-12 leading-[1.1] break-words"
        >
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">immersive.</span>
        </motion.h2>

        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-8 items-start"
        >
            <a 
                href="mailto:hello@ronakkanojia.dev"
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full overflow-hidden inline-flex items-center gap-3 w-full md:w-auto justify-center"
            >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Say Hello</span>
                <Mail className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
        </motion.div>
      </div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-[1600px] mx-auto w-full border-t border-gray-900 pt-8 flex flex-col-reverse md:flex-row justify-between items-start md:items-center text-sm text-gray-500 gap-6 mt-12"
      >
        <div className="w-full md:w-auto">
            &copy; {new Date().getFullYear()} Ronak Kanojia. All Rights Reserved.
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8 w-full md:w-auto">
            {SOCIAL_LINKS.map(link => (
                <a key={link.label} href={link.url} className="hover:text-white transition-colors uppercase tracking-wider font-medium text-xs md:text-sm">{link.label}</a>
            ))}
        </div>
      </motion.footer>
    </motion.section>
  );
};

export default Contact;