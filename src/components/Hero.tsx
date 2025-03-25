
import React from 'react';
import Button from './ui/Button';
import { Calendar, ArrowLeft } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-end text-center md:text-right animate-fade-in" style={{ direction: 'rtl' }}>
            <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">أخصائية أنف وأذن وحنجرة</span>
            <h1 className="mb-4">
              <span className="block text-white">صحتك,</span>
              <span className="text-gradient font-bold">أولويتنا</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary mb-6 max-w-2xl">
              الدكتورة نادية نعيم - خبرة متميزة في علاج أمراض الأنف والأذن والحنجرة
            </h2>
            <p className="text-secondary/80 mb-8 max-w-xl">
              متخصصة في تشخيص وعلاج أمراض الأنف والأذن والحنجرة بأحدث التقنيات والأساليب الطبية. 
              رعاية طبية متميزة ومخصصة لكل مريض.
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
                className="rtl:flex-row-reverse border-secondary/30 text-secondary hover:bg-secondary/10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                خدماتنا
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 animate-slide-in-right hidden md:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full aspect-[3/4] rounded-2xl bg-accent/10 p-2">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  {/* Will be replaced with actual doctor image */}
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary text-lg">صورة الدكتورة نادية</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">15+</span>
                <span className="text-white text-xs absolute bottom-7">سنوات الخبرة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
