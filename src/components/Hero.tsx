
import React from 'react';
import ButtonCustom from './ui/button-custom';
import { Calendar, ArrowLeft } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center transform-gpu">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-end text-center md:text-right transform-gpu" style={{ direction: 'rtl' }}>
            <span className="px-5 py-2 bg-accent/10 text-accent rounded-full text-lg font-bold mb-4 sharp-text">أخصائية أنف وأذن وحنجرة</span>
            <h1 className="mb-4 sharp-text transform-gpu">
              <span className="text-gradient font-bold text-5xl md:text-6xl lg:text-7xl">الدكتورة نادية نعيم</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-secondary mb-6 max-w-2xl font-bold sharp-text transform-gpu">
              خبرة متميزة في علاج أمراض الأنف والأذن والحنجرة
            </h2>
            <p className="text-secondary/80 mb-8 max-w-xl text-xl sharp-text">
              متخصصة في تشخيص وعلاج أمراض الأنف والأذن والحنجرة بأحدث التقنيات والأساليب الطبية. 
              رعاية طبية متميزة ومخصصة لكل مريض.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end transform-gpu">
              <ButtonCustom 
                size="lg" 
                variant="primary" 
                icon={<Calendar size={20} />} 
                iconPosition="left"
                className="rtl:flex-row-reverse text-lg font-bold"
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              >
                حجز موعد
              </ButtonCustom>
              <ButtonCustom 
                size="lg" 
                variant="outline" 
                icon={<ArrowLeft size={20} />} 
                iconPosition="right"
                className="rtl:flex-row-reverse border-secondary/30 text-secondary hover:bg-secondary/10 text-lg font-bold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                خدماتنا
              </ButtonCustom>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 transform-gpu">
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full aspect-[3/4] rounded-2xl bg-accent/10 p-2 transform-gpu">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/366296c8-32b7-4a4d-bd5e-1c896d9472bc.png" 
                    alt="الدكتورة نادية نعيم" 
                    className="w-full h-full object-cover transform-gpu"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-accent flex items-center justify-center shadow-lg transform-gpu">
                <span className="text-white font-bold text-2xl sharp-text">15+</span>
                <span className="text-white text-sm absolute bottom-7 font-bold sharp-text">سنوات الخبرة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
