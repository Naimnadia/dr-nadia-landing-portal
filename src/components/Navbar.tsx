
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import ButtonCustom from './ui/button-custom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-3xl font-display font-bold text-white sharp-text">
          د. نادية نعيم
        </a>
        
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <a href="#home" className="text-white/80 hover:text-white transition-colors text-lg font-medium sharp-text">الرئيسية</a>
          <a href="#services" className="text-white/80 hover:text-white transition-colors text-lg font-medium sharp-text">الخدمات</a>
          <a href="#experience" className="text-white/80 hover:text-white transition-colors text-lg font-medium sharp-text">الخبرات</a>
          <a href="#appointment" className="text-white/80 hover:text-white transition-colors text-lg font-medium sharp-text">حجز موعد</a>
        </nav>
        
        <div className="hidden md:flex">
          <ButtonCustom 
            variant="primary" 
            icon={<Phone size={18} />} 
            className="rtl:flex-row-reverse text-lg font-bold sharp-text"
          >
            0645483280
          </ButtonCustom>
        </div>
        
        <button 
          className="block md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#home" 
              className="text-white/80 hover:text-white transition-colors py-2 text-xl font-medium sharp-text"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </a>
            <a 
              href="#services" 
              className="text-white/80 hover:text-white transition-colors py-2 text-xl font-medium sharp-text"
              onClick={() => setIsMenuOpen(false)}
            >
              الخدمات
            </a>
            <a 
              href="#experience" 
              className="text-white/80 hover:text-white transition-colors py-2 text-xl font-medium sharp-text"
              onClick={() => setIsMenuOpen(false)}
            >
              الخبرات
            </a>
            <a 
              href="#appointment" 
              className="text-white/80 hover:text-white transition-colors py-2 text-xl font-medium sharp-text"
              onClick={() => setIsMenuOpen(false)}
            >
              حجز موعد
            </a>
            <ButtonCustom 
              variant="primary" 
              icon={<Phone size={20} />} 
              className="w-full justify-center mt-2 rtl:flex-row-reverse text-lg font-bold sharp-text"
            >
              0645483280
            </ButtonCustom>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
