
import React from 'react';
import Button from './ui/Button';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-medical-50/80 to-transparent -z-10"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right animate-fade-in" style={{ direction: 'rtl' }}>
            <p className="text-medical-600 font-medium mb-3">أخصائية أنف وأذن وحنجرة</p>
            <h1 className="text-gradient mb-4">
              الدكتورة نادية نعيم
            </h1>
            <h2 className="text-2xl md:text-3xl text-medical-900 mb-6 max-w-2xl">
              خبرة متميزة في علاج أمراض الأنف والأذن والحنجرة
            </h2>
            <p className="text-medical-700 mb-8 max-w-xl">
              متخصصة في تشخيص وعلاج أمراض الأنف والأذن والحنجرة بأحدث التقنيات والأساليب الطبية. 
              التزامنا الدائم بتقديم الرعاية الطبية المتميزة والمخصصة لكل مريض.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Button 
                size="lg" 
                variant="primary" 
                icon={<Calendar size={18} />} 
                iconPosition="left"
                className="rtl:flex-row-reverse"
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              >
                حجز موعد
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                icon={<ArrowLeft size={18} />} 
                iconPosition="right"
                className="rtl:flex-row-reverse"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                خدماتنا
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-slide-in-right">
            <div className="relative w-full aspect-square md:aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full md:rounded-2xl bg-gradient-to-tr from-medical-100 to-medical-50 transform rotate-3"></div>
              <div className="absolute inset-0 rounded-full md:rounded-2xl overflow-hidden transform -rotate-3">
                {/* Placeholder for doctor image - replace with actual image */}
                <div className="w-full h-full bg-medical-200 flex items-center justify-center">
                  <span className="text-medical-600 text-lg">صورة الدكتورة نادية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
