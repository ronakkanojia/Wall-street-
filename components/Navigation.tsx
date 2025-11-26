import React from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { ViewState } from '../types';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 lg:px-20 flex justify-between items-center mix-blend-difference text-white"
      >
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity uppercase z-50"
        >
          Ronak Kanojia
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view)}
              className={`text-sm lg:text-base font-medium tracking-wide transition-all relative group ${currentView === item.view ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${currentView === item.view ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 -mr-2 active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-10"
      >
        <button 
            onClick={() => handleNavClick('home')} 
            className="text-4xl font-light tracking-tight hover:text-gray-300 transition-colors p-4"
        >
            Home
        </button>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.view)}
            className="text-4xl font-light tracking-tight hover:text-gray-300 transition-colors p-4"
          >
            {item.label}
          </button>
        ))}
      </motion.div>
    </>
  );
};

export default Navigation;