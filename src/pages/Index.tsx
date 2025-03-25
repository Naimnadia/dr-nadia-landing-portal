
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Appointment from '@/components/Appointment';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set appropriate language direction and title
    document.documentElement.dir = 'rtl';
    document.title = 'د. نادية نعيم - أخصائية أنف وأذن وحنجرة';
    
    // Optimize for high performance scrolling
    const optimizeForScrolling = () => {
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (!targetId) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              // Use browser's native scrollIntoView with optimizations
              window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY,
                behavior: 'smooth'
              });
            }
          });
        });
      }, 100);
    };
    
    // Apply hardware acceleration to all sections for smooth transitions
    const applyHardwareAcceleration = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.classList.add('smooth-transition');
        section.style.transform = 'translate3d(0, 0, 0)';
        section.style.backfaceVisibility = 'hidden';
      });
    };
    
    optimizeForScrolling();
    applyHardwareAcceleration();
    
    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="transform-gpu">
        <Hero />
        <Services />
        <Experience />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
