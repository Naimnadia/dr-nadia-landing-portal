
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
    
    // Smooth scrolling for anchor links with improved performance
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Using scrollIntoView with improved options for smoother scrolling
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Improve scrolling performance
    const improveScrollPerformance = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.classList.add('smooth-transition');
      });
    };
    
    improveScrollPerformance();
    
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
      <Hero />
      <Services />
      <Experience />
      <Appointment />
      <Footer />
    </div>
  );
};

export default Index;
