import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#0a0a0a] pt-24 px-6 md:px-12 lg:px-20 pb-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group py-2"
        >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to work
        </button>

        <header className="mb-12 md:mb-20">
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tighter"
            >
                {project.title}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
                <div>
                    <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Role</span>
                    <span className="text-lg md:text-xl lg:text-2xl">{project.role}</span>
                </div>
                <div>
                    <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Year</span>
                    <span className="text-lg md:text-xl lg:text-2xl">{project.year}</span>
                </div>
                <div>
                    <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Stack</span>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map(s => <span key={s} className="text-lg md:text-xl lg:text-2xl text-gray-300">{s}{', '}</span>)}
                    </div>
                </div>
            </div>
        </header>

        <div className="w-full aspect-video bg-gray-900 mb-12 md:mb-20 overflow-hidden rounded-lg">
            <img src={project.image} alt="Hero" loading="lazy" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-bold mb-4">The Challenge</h3>
            </div>
            <div className="md:col-span-8 text-gray-300 text-base md:text-xl lg:text-2xl leading-relaxed">
                {project.description}
                <br /><br />
                {project.challenge}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 md:mb-24">
            {project.gallery.map((img, idx) => (
                <div key={idx} className="aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden">
                    <img src={img} alt={`Gallery ${idx}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-800 pt-12 md:pt-20">
            <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-bold mb-4">The Outcome</h3>
            </div>
            <div className="md:col-span-8 text-gray-300 text-base md:text-xl lg:text-2xl leading-relaxed">
                {project.outcome}
                <div className="mt-8">
                    <a href="#" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-70 transition-opacity text-lg">
                        Visit Live Site <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectDetail;