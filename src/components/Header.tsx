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
  return <header ref={headerRef} className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
      <div ref={containerRef} className="hidden md:block mx-auto max-w-6xl">
        <div style={{
        backgroundColor: `rgba(14, 8, 18, 0.13)`,
        borderColor: `rgba(147, 96, 147, 0.2)`,
        boxShadow: `0 25px 50px -12px rgba(6, 3, 9, 0.6)`
      }} className="rounded-2xl backdrop-blur-xl transition-all duration-300 border py-[6px] px-[54px]">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-normal text-white">Ulo</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Products
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Solutions
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
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
      </div>
    </header>;
};
export default Header;