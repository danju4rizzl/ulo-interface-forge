import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const container = containerRef.current;
    
    if (!header || !container) return;

    let isScrolled = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShrink = scrollY >= 200;

      if (shouldShrink && !isScrolled) {
        isScrolled = true;
        gsap.to(container, {
          duration: 0.6,
          maxWidth: 'calc(100% - 200px)',
          borderRadius: '24px',
          marginTop: '12px',
          ease: 'power2.out'
        });
      } else if (!shouldShrink && isScrolled) {
        isScrolled = false;
        gsap.to(container, {
          duration: 0.6,
          maxWidth: '100%',
          borderRadius: '0px',
          marginTop: '0px',
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10 transition-all duration-300"
    >
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-normal text-white">Ulo</div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Resources
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm text-white/70 hover:text-white hover:bg-white/10">
              Sign in
            </Button>
            <Button className="text-sm px-6 bg-white text-black hover:bg-white/90">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
