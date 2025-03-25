
import React from 'react';
import { Stethoscope, Heart, Ear, Brain, Microscope, Activity } from 'lucide-react';

const services = [
  {
    icon: <Ear className="w-6 h-6" />,
    title: "تشخيص وعلاج أمراض الأذن",
    description: "تشخيص وعلاج التهاب الأذن الوسطى، مشاكل السمع، والدوار بأحدث التقنيات الطبية."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "علاج مشاكل الجيوب الأنفية",
    description: "علاج متخصص لالتهابات وحساسية الجيوب الأنفية المزمنة والحادة."
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "علاج اضطرابات النوم والشخير",
    description: "تقييم وعلاج مشاكل انقطاع التنفس أثناء النوم والشخير بطرق حديثة وفعالة."
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "جراحات الأنف والأذن والحنجرة",
    description: "إجراء العمليات الجراحية المتخصصة بأعلى معايير الدقة والسلامة."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "علاج مشاكل البلع والصوت",
    description: "تشخيص وعلاج اضطرابات البلع ومشاكل الصوت والحبال الصوتية."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "رعاية الأطفال المتخصصة",
    description: "علاج متخصص لمشاكل الأنف والأذن والحنجرة عند الأطفال بأسلوب لطيف ومريح."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-medical-50 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in" style={{ direction: 'rtl' }}>
          <h2 className="section-title inline-block">خدماتنا المتخصصة</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mt-2 mb-6"></div>
          <p className="section-subtitle mx-auto">
            نقدم مجموعة شاملة من الخدمات الطبية المتخصصة في مجال الأنف والأذن والحنجرة بمعايير عالمية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rtl">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-box mb-4 mx-auto md:mx-0">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-medical-900 mb-3">{service.title}</h3>
              <p className="text-medical-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Services;
