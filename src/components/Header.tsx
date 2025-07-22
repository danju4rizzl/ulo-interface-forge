import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'
const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Improved mobile menu toggler for correct open/close animation
  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true)
    } else {
      // Animate out, then close
      const menu = mobileMenuRef.current
      if (menu) {
        gsap.to(menu, {
          x: '100%',
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => setIsMobileMenuOpen(false)
        })
      } else {
        setIsMobileMenuOpen(false)
      }
    }
  }

  // Animate menu in when it appears
  useEffect(() => {
    if (isMobileMenuOpen) {
      const menu = mobileMenuRef.current
      if (menu) {
        gsap.fromTo(
          menu,
          { x: '100%' },
          { x: '0%', duration: 0.5, ease: 'power2.out' }
        )
      }
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const header = headerRef.current
    const container = containerRef.current
    if (!header || !container) return
    let isExpanded = false

    const handleScroll = () => {
      const scrollY = window.scrollY
      const shouldExpand = scrollY < 200
      if (shouldExpand && !isExpanded) {
        isExpanded = true
        gsap.to(container, {
          duration: 0.6,
          maxWidth: '80%',
          borderRadius: '32px',
          marginTop: '8px',
          padding: '12px 64px',
          scale: 1.05,
          ease: 'power2.out'
        })
      } else if (!shouldExpand && isExpanded) {
        isExpanded = false
        gsap.to(container, {
          duration: 0.6,
          maxWidth: '65%',
          borderRadius: '24px',
          marginTop: '0px',
          padding: '6px 54px',
          scale: 1,
          ease: 'power2.out'
        })
      }
    }

    // Set initial state based on current scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-4 left-4 right-4 z-[100] transition-all duration-300"
      >
        {/* Desktop Navbar */}
        <div
          ref={containerRef}
          className="hidden md:block mx-auto"
          style={{ maxWidth: '75%' }}
        >
          <div
            style={{
              backgroundColor: `rgba(0, 0, 18, 0.1)`,
              boxShadow: `0 25px 50px -12px rgba(6, 3, 9, 0.2)`
            }}
            className="rounded-3xl backdrop-blur-xl transition-all duration-300 py-[6px] px-[54px]"
          >
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link to={'/'}>
                  <img
                    src="/ulo-icon.png"
                    alt="Logo of Ulo"
                    className="h-10 hover:scale-110 transition-transform"
                  />
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8 items-center ">
                <Button
                  variant="ghost"
                  className="text-sm text-black hover:text-black/70 hover:bg-white"
                >
                  <Link to={'#'}>Products</Link>
                </Button>

                <Button
                  variant="ghost"
                  className="text-sm text-black hover:text-black/70 hover:bg-white"
                >
                  <Link to={'#'}>Solutions</Link>
                </Button>

                <Button
                  variant="ghost"
                  className="text-sm text-black hover:text-black/70 hover:bg-white"
                >
                  <Link to={'#'}>Resources</Link>
                </Button>
              </nav>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="text-sm px-6 bg-primary text-white hover:bg-white hover:text-primary border-none "
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden mx-auto max-w-6xl">
          <div
            style={{
              backgroundColor: `rgba(14, 8, 18, 0.13)`,
              borderColor: `rgba(147, 96, 147, 0.2)`,
              boxShadow: `0 25px 50px -12px rgba(6, 3, 9, 0.6)`
            }}
            className="rounded-2xl backdrop-blur-xl transition-all duration-300 border py-3 px-6"
          >
            <div className="flex justify-between items-center h-12">
              <Link to={'/'}>
                <img src="/ulo-logo.png" alt="Ulo" className="h-6" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-black hover:bg-black/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-full w-80 z-[101] transform translate-x-full"
          style={{
            backgroundColor: `rgba(14, 8, 18, 0.13)`,
            borderColor: `rgba(147, 96, 147, 0.2)`,
            boxShadow: `0 25px 50px -12px rgba(6, 3, 9, 0.6)`
          }}
        >
          <div className="backdrop-blur-xl h-full border-l border-white/20 p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to={'/'}>
                <img src="/ulo-logo.png" alt="Logo of Ulo" className="h-10" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-black hover:bg-black/10"
              >
                <X className="h-8 w-8" />
              </Button>
            </div>

            <nav className="space-y-6">
              <a
                href="#"
                className="block text-black/70 hover:text-black text-lg transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="block text-black/70 hover:text-black text-lg transition-colors"
              >
                Solutions
              </a>
              <a
                href="#"
                className="block text-black/70 hover:text-black text-lg transition-colors"
              >
                Resources
              </a>
            </nav>

            <div className="mt-8 space-y-4">
              {/* <Button
                variant="ghost"
                className="w-full text-black/70 hover:text-black hover:bg-black/10"
              >
                Sign in
              </Button> */}
              <Button className="w-full bg-black text-white hover:bg-black/90">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Header;