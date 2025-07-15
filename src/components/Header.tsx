import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-normal text-gray-900">Ulo</div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm"
              >
                Resources
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm text-gray-700">
              Sign in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white text-sm px-6">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
