import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface WorkProps {
  onProjectSelect: (id: string) => void;
}

const Work: React.FC<WorkProps> = ({ onProjectSelect }) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 md:px-12 lg:px-20 py-24 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto">
        <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 md:mb-16 tracking-tighter"
        >
          Selected Work <span className="text-gray-600">({PROJECTS.length})</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={() => onProjectSelect(project.id)} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
            onClick={onClick}
        >
            <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg bg-gray-900 w-full">
                <motion.img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full opacity-90 md:opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-white w-6 h-6" />
                </div>
            </div>
            
            <div className="flex justify-between items-start border-b border-gray-800 pb-6 group-hover:border-gray-600 transition-colors mt-auto">
                <div className="pr-4">
                    <h3 className="text-2xl md:text-3xl font-medium mb-1 break-words">{project.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{project.category}</p>
                </div>
                <span className="text-gray-500 font-mono text-sm shrink-0">{project.year}</span>
            </div>
            <div className="pt-4 flex flex-wrap gap-2">
                {project.stack.map(tech => (
                    <span key={tech} className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded-full">{tech}</span>
                ))}
            </div>
        </motion.div>
    )
}

export default Work;