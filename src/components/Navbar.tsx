
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './ui/Button';

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
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-medium text-medical-900">
          د. نادية نعيم
        </a>
        
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <a href="#home" className="text-medical-800 hover:text-medical-600 transition-colors">الرئيسية</a>
          <a href="#services" className="text-medical-800 hover:text-medical-600 transition-colors">الخدمات</a>
          <a href="#experience" className="text-medical-800 hover:text-medical-600 transition-colors">الخبرات</a>
          <a href="#appointment" className="text-medical-800 hover:text-medical-600 transition-colors">حجز موعد</a>
        </nav>
        
        <div className="hidden md:flex">
          <Button 
            variant="primary" 
            icon={<Phone size={18} />} 
            className="rtl:flex-row-reverse"
          >
            0645483280
          </Button>
        </div>
        
        <button 
          className="block md:hidden text-medical-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#home" 
              className="text-medical-800 hover:text-medical-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </a>
            <a 
              href="#services" 
              className="text-medical-800 hover:text-medical-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الخدمات
            </a>
            <a 
              href="#experience" 
              className="text-medical-800 hover:text-medical-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الخبرات
            </a>
            <a 
              href="#appointment" 
              className="text-medical-800 hover:text-medical-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              حجز موعد
            </a>
            <Button 
              variant="primary" 
              icon={<Phone size={18} />} 
              className="w-full justify-center mt-2 rtl:flex-row-reverse"
            >
              0645483280
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
