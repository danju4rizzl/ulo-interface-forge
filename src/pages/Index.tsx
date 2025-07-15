import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Phone, Globe, Users, TrendingUp, Shield, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollDotsRef = useRef(null);
  const blueDotRef = useRef(null);

  const heroSlides = [
    {
      title: "Stand out on Ulo with a free Business Profile",
      description: "Turn people who find you on Ulo Search and Maps into new customers with a free Business Profile for your storefront or service area.",
      videoUrl: "#video1"
    },
    {
      title: "Connect with customers across Ulo",
      description: "Help people discover your business and engage with your customers through Ulo Search and Maps integration.",
      videoUrl: "#video2"
    },
    {
      title: "Share what makes you special",
      description: "Upload photos, respond to reviews, post updates, and showcase your business to potential customers.",
      videoUrl: "#video3"
    },
    {
      title: "Turn viewers into customers",
      description: "Get the insights you need to keep customers coming back and grow your business with data-driven decisions.",
      videoUrl: "#video4"
    }
  ];

  const businessSlides = [
    {
      id: 0,
      title: "Get discovered",
      description: "Your Business Profile lets you connect with customers across Ulo Search and Maps. When people search for businesses like yours, make sure they find your business.",
      videoUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 1,
      title: "Build trust",
      description: "Customers are more likely to choose a business with photos, reviews, and up-to-date information. Your Business Profile helps you put your best foot forward.",
      videoUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 2,
      title: "Engage customers",
      description: "Keep customers engaged with regular updates, respond to reviews, and showcase what makes your business special with photos and posts.",
      videoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 3,
      title: "Grow your business",
      description: "Use insights and analytics to understand how customers find and interact with your business, helping you make data-driven decisions.",
      videoUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % businessSlides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  useEffect(() => {
    if (scrollDotsRef.current && blueDotRef.current) {
      const scrollSection = scrollDotsRef.current;
      const blueDot = blueDotRef.current;
      
      gsap.set(blueDot, { y: 0 });
      
      ScrollTrigger.create({
        trigger: scrollSection,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const maxY = 280; // Total distance the dot can travel (7 gray dots * 40px spacing)
          gsap.to(blueDot, {
            y: progress * maxY,
            duration: 0.1,
            ease: "none"
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-normal text-gray-900">Ulo</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Products</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Solutions</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Resources</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-sm text-gray-700">Sign in</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6">Get started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                      <h1 className="text-5xl font-normal text-gray-900 mb-6 leading-tight animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in">
                        {slide.description}
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base animate-fade-in">
                        Get started
                      </Button>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                            <Play className="w-8 h-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm opacity-80">See how Ulo Business Profile works - Slide {index + 1}</p>
                        </div>
                        {/* Video placeholder that would play when slide is active */}
                        <video 
                          className="w-full h-full object-cover opacity-0"
                          autoPlay 
                          muted 
                          loop
                          data-slide={index}
                        >
                          <source src={slide.videoUrl} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Connect with customers</h3>
              <p className="text-gray-600">Help people discover your business and engage with your customers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Share what makes you special</h3>
              <p className="text-gray-600">Upload photos, respond to reviews, post updates, and more.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Turn viewers into customers</h3>
              <p className="text-gray-600">Get the insights you need to keep customers coming back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Showcase - Updated to Horizontal Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">Turn a Ulo search into a visit to your business</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Sliding text content with line timers */}
            <div className="space-y-8">
              {businessSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`flex items-start space-x-4 cursor-pointer transition-all duration-300 ${
                    index === activeSlide ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setActiveSlide(index)}
                >
                  {/* Line timer */}
                  <div className="flex-shrink-0 w-1 h-16 bg-gray-300 rounded-full overflow-hidden">
                     <div 
                      className={`w-full bg-blue-600 transition-all ease-linear ${
                        index === activeSlide 
                          ? 'h-full duration-[10000ms]' 
                          : 'h-0 duration-300'
                      }`}
                      style={{
                        transformOrigin: 'top'
                      }}
                     />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-2xl font-medium text-gray-900 mb-2 transition-all duration-300 ${
                      index === activeSlide ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {slide.title}
                    </h3>
                    {index === activeSlide && (
                      <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Video grid */}
            <div className="grid grid-cols-2 gap-4">
              {businessSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === activeSlide 
                      ? 'ring-4 ring-blue-600 scale-105 shadow-xl' 
                      : 'hover:scale-102 shadow-md'
                  }`}
                  onClick={() => setActiveSlide(index)}
                >
                  <img
                    src={slide.videoUrl}
                    alt={`${slide.title} preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all ${
                      index === activeSlide ? 'scale-110' : 'scale-100'
                    }`}>
                      <Play className="w-6 h-6 text-gray-900 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  {index === activeSlide && (
                    <div className="absolute top-2 left-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-normal text-gray-900 mb-6">
                50% of consumers who conducted a local search on their smartphone visited a store within a day
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Source: Think with Ulo, "How Mobile has Changed What It Means to Shop Local," May 2019.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get started
              </Button>
            </div>
            <div>
              <Card className="bg-white shadow-lg border-0 shadow-gray-200/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Performance insights</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Profile views</span>
                      <span className="font-medium text-gray-900">8,240</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Search views</span>
                      <span className="font-medium text-gray-900">5,123</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Direction requests</span>
                      <span className="font-medium text-gray-900">1,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Phone calls</span>
                      <span className="font-medium text-gray-900">892</span>
                    </div>
                  </div>
                  <div className="mt-6 h-32 bg-blue-50 rounded flex items-end justify-center">
                    <div className="text-blue-600 text-sm">Chart visualization</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
          <h2 className="text-4xl font-normal text-gray-900 mb-6">
            Show the best of your business
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload</h3>
              <p className="text-gray-600">Add photos of your business, products, and team</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Promote</h3>
              <p className="text-gray-600">Share updates and offers with potential customers</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Manage</h3>
              <p className="text-gray-600">View insights and respond to customer reviews</p>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base">
            Get started
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-normal text-gray-900 mb-12 text-center">Your questions, answered</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">How do I get started with Ulo Business Profile?</h3>
              <p className="text-gray-600">Getting started is easy and free. Simply click "Get started" and follow the steps to create your business profile.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">How long do profile changes take to appear?</h3>
              <p className="text-gray-600">Most changes to your Business Profile appear within a few minutes, though some updates may take longer.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Is Ulo Business Profile really free?</h3>
              <p className="text-gray-600">Yes, creating and maintaining your Business Profile on Ulo is completely free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Ulo</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Products</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Business</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Advertising</a></li>
                <li><a href="#" className="hover:text-gray-900">Solutions</a></li>
                <li><a href="#" className="hover:text-gray-900">How Search works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Ulo API</a></li>
                <li><a href="#" className="hover:text-gray-900">Ulo Cloud</a></li>
                <li><a href="#" className="hover:text-gray-900">Ulo Maps Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Support</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-600">
            <p>&copy; 2024 Ulo LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Interactive Scroll Dots Section */}
      <div ref={scrollDotsRef} className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="relative">
          {/* Gray dots path */}
          <div className="flex flex-col items-center space-y-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-gray-400 rounded-full opacity-60"
              />
            ))}
          </div>
          
          {/* Blue moving dot */}
          <div
            ref={blueDotRef}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full shadow-lg"
            style={{ transformOrigin: 'center' }}
          />
          
          {/* Dotted line connecting the dots */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full">
            <div className="w-full h-full border-l-2 border-dashed border-gray-300 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
