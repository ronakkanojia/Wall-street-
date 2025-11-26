import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
  "Tailwind CSS", "Framer Motion", "Three.js / R3F", 
  "WebGL", "Node.js", "GraphQL", "Figma"
];

const About: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 md:px-12 lg:px-20 py-32 flex flex-col justify-center"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-16 tracking-tighter"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-xl font-medium text-gray-400 mb-6 uppercase tracking-widest">Biography</h3>
                <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-200 font-light">
                    I'm Ronak Kanojia, a creative frontend developer based in the digital realm. I specialize in bridging the gap between design and engineering, ensuring that every pixel serves a purpose and every interaction feels natural.
                </p>
                <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-200 mt-8 font-light">
                    With a background in both traditional design and computer science, I approach problems with a unique dual perspective. I don't just write code; I craft experiences that leave a lasting impression.
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="text-xl font-medium text-gray-400 mb-6 uppercase tracking-widest">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <span 
                            key={skill} 
                            className="px-4 py-2 border border-gray-800 rounded-full text-gray-300 text-sm md:text-lg hover:border-white hover:text-white transition-colors cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="mt-16">
                    <h3 className="text-xl font-medium text-gray-400 mb-6 uppercase tracking-widest">Experience</h3>
                    <ul className="space-y-6">
                        <li className="flex justify-between items-baseline border-b border-gray-800 pb-4">
                            <span className="text-lg md:text-xl font-medium">Senior Frontend Dev @ TechCorp</span>
                            <span className="text-sm md:text-base text-gray-500 whitespace-nowrap ml-4">2022 - Present</span>
                        </li>
                        <li className="flex justify-between items-baseline border-b border-gray-800 pb-4">
                            <span className="text-lg md:text-xl font-medium">Creative Developer @ StudioX</span>
                            <span className="text-sm md:text-base text-gray-500 whitespace-nowrap ml-4">2020 - 2022</span>
                        </li>
                        <li className="flex justify-between items-baseline border-b border-gray-800 pb-4">
                            <span className="text-lg md:text-xl font-medium">Freelance</span>
                            <span className="text-sm md:text-base text-gray-500 whitespace-nowrap ml-4">2018 - 2020</span>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;