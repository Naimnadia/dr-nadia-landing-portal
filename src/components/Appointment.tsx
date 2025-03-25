
import React from 'react';
import ButtonCustom from './ui/button-custom';
import { Phone, Clock, Calendar, MapPin } from 'lucide-react';

const Appointment = () => {
  return (
    <section id="appointment" className="bg-medical-50 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in" style={{ direction: 'rtl' }}>
          <h2 className="section-title inline-block">حجز موعد</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto mt-2 mb-6"></div>
          <p className="section-subtitle mx-auto">
            نحن هنا لمساعدتك، يمكنك حجز موعد بسهولة من خلال الاتصال المباشر
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-medium text-medical-900 mb-6 text-center md:text-right">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 rtl:flex-row-reverse">
                  <div className="icon-box shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 rtl:text-right">
                    <h4 className="font-medium text-medical-900 mb-1">رقم الهاتف</h4>
                    <a href="tel:0645483280" className="text-medical-700 hover:text-medical-500 transition-colors">0645483280</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rtl:flex-row-reverse">
                  <div className="icon-box shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1 rtl:text-right">
                    <h4 className="font-medium text-medical-900 mb-1">ساعات العمل</h4>
                    <p className="text-medical-700">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                    <p className="text-medical-700">السبت: 10:00 ص - 2:00 م</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rtl:flex-row-reverse">
                  <div className="icon-box shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 rtl:text-right">
                    <h4 className="font-medium text-medical-900 mb-1">العنوان</h4>
                    <p className="text-medical-700">عيادة د. نادية نعيم - أخصائية أنف وأذن وحنجرة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-medium text-medical-900 mb-6 text-center md:text-right">احجز موعدك الآن</h3>
              
              <p className="text-medical-700 mb-6 text-center md:text-right">
                يمكنك حجز موعد مع الدكتورة نادية نعيم عن طريق الاتصال المباشر برقم الهاتف. سنقوم بالرد على استفساراتك وتحديد موعد يناسبك في أقرب وقت ممكن.
              </p>
              
              <div className="mt-auto">
                <ButtonCustom 
                  variant="primary" 
                  icon={<Phone size={18} />} 
                  className="w-full justify-center text-lg py-6 rtl:flex-row-reverse"
                  onClick={() => window.location.href = 'tel:0645483280'}
                >
                  اتصل الآن: 0645483280
                </ButtonCustom>
              </div>
              
              <p className="text-sm text-medical-600 mt-4 text-center">
                يرجى الاتصال خلال ساعات العمل للحصول على استجابة سريعة
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-8 shadow-lg animate-fade-in rtl" style={{ animationDelay: "0.3s" }}>
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-medium text-medical-900 mb-2">هل لديك استفسارات طبية؟</h3>
            <p className="text-medical-700">نحن هنا للإجابة على أسئلتك وتقديم المساعدة اللازمة</p>
          </div>
          
          <ButtonCustom 
            variant="secondary" 
            icon={<Calendar size={18} />} 
            size="lg"
            className="rtl:flex-row-reverse"
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
          >
            تواصل معنا
          </ButtonCustom>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Appointment;
