
import React from 'react';
import { Phone, Clock, MapPin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-medical-900 text-white pt-16 pb-6" style={{ direction: 'rtl' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl font-display font-medium mb-4">د. نادية نعيم</h2>
            <p className="text-medical-100 mb-6 max-w-md">
              أخصائية أنف وأذن وحنجرة، ملتزمة بتقديم أعلى مستويات الرعاية الطبية المتخصصة بأحدث التقنيات والأساليب العلاجية.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-medical-300" />
                <span className="text-medical-100">0645483280</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-medical-300" />
                <span className="text-medical-100">info@drnadianaeem.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-medical-300" />
                <span className="text-medical-100">عيادة د. نادية نعيم - أخصائية أنف وأذن وحنجرة</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-medical-300" />
                <span className="text-medical-100">الأحد - الخميس: 9:00 ص - 6:00 م</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-medium mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-medical-100 hover:text-white transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#services" className="text-medical-100 hover:text-white transition-colors">الخدمات</a>
              </li>
              <li>
                <a href="#experience" className="text-medical-100 hover:text-white transition-colors">الخبرات</a>
              </li>
              <li>
                <a href="#appointment" className="text-medical-100 hover:text-white transition-colors">حجز موعد</a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-medium mb-4">ساعات العمل</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-medical-100">الأحد - الخميس:</span>
                <span className="text-medical-100">9:00 ص - 6:00 م</span>
              </li>
              <li className="flex justify-between">
                <span className="text-medical-100">السبت:</span>
                <span className="text-medical-100">10:00 ص - 2:00 م</span>
              </li>
              <li className="flex justify-between">
                <span className="text-medical-100">الجمعة:</span>
                <span className="text-medical-100">مغلق</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-medical-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-medical-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} عيادة د. نادية نعيم. جميع الحقوق محفوظة.
          </p>
          
          <button 
            className="p-3 bg-medical-800 rounded-full hover:bg-medical-700 transition-colors"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
