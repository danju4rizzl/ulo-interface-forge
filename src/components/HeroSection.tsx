import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { HeroContent } from '@/types';

interface HeroSectionProps {
  heroContent: HeroContent;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroContent }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        videoRef.current.muted = true;
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-normal text-gray-900 mb-6 leading-tight animate-fade-in">
              {heroContent.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in">
              {heroContent.description}
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base animate-fade-in">
              Get started
            </Button>
          </div>
          <div className="lg:col-span-3">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                poster="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              >
                <source src={heroContent.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handleVideoToggle}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group">
                  <Play
                    className="w-8 h-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">
                  See how Ulo Business Profile works
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
