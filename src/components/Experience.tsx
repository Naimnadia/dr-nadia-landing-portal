
import React from 'react';
import { GraduationCap, Award, BookOpen, Globe } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="relative">
      <div className="container mx-auto" style={{ direction: 'rtl' }}>
        <div className="text-center md:text-right mb-16 animate-fade-in">
          <h2 className="section-title inline-block">خبرات وشهادات</h2>
          <div className="w-20 h-1 bg-medical-500 mx-auto md:mx-0 md:mr-0 mt-2 mb-6"></div>
          <p className="section-subtitle md:mx-0">
            مسيرة مهنية حافلة بالإنجازات والخبرات في مجال طب الأنف والأذن والحنجرة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-medical-900 mb-4">المؤهلات العلمية</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="icon-box shrink-0 mt-1">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-medical-900">دكتوراه في طب الأنف والأذن والحنجرة</h4>
                    <p className="text-medical-700">جامعة طبية مرموقة</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="icon-box shrink-0 mt-1">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-medical-900">تخصص دقيق في جراحات الأنف والجيوب الأنفية</h4>
                    <p className="text-medical-700">مركز طبي متخصص</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="icon-box shrink-0 mt-1">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-medical-900">زمالة في طب اضطرابات النوم</h4>
                    <p className="text-medical-700">مستشفى عالمي رائد</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-medical-900 mb-4">الخبرات العملية</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="icon-box shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-medical-900">أكثر من 15 عام من الخبرة</h4>
                    <p className="text-medical-700">في تشخيص وعلاج أمراض الأنف والأذن والحنجرة</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="icon-box shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-medical-900">استشاري في مستشفيات مرموقة</h4>
                    <p className="text-medical-700">خبرة واسعة في التعامل مع الحالات المعقدة والنادرة</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="icon-box shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-medical-900">أكثر من 5000 عملية جراحية ناجحة</h4>
                    <p className="text-medical-700">في مختلف مجالات جراحات الأنف والأذن والحنجرة</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-slide-up col-span-1 md:col-span-2" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-medium text-medical-900 mb-4">فلسفتي في العلاج</h3>
            <p className="text-medical-700 mb-4">
              أؤمن بتقديم رعاية طبية شاملة ومخصصة لكل مريض. فكل حالة فريدة وتتطلب نهجًا خاصًا بها، مع مراعاة الجوانب النفسية والاجتماعية إلى جانب الجوانب الطبية.
            </p>
            <p className="text-medical-700">
              أحرص على مواكبة أحدث التطورات العلمية والتقنيات الطبية في مجال تخصصي، وأسعى دائمًا لتطبيق أفضل الممارسات العالمية لتحقيق أعلى معايير الرعاية الصحية لمرضاي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
