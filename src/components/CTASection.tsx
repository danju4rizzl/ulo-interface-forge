import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  const ctaFeatures = [
    {
      title: "Upload",
      description: "Add photos of your business, products, and team"
    },
    {
      title: "Promote",
      description: "Share updates and offers with potential customers"
    },
    {
      title: "Manage",
      description: "View insights and respond to customer reviews"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto ">
        <div className="flex items-center justify-center space-x-5">
          <img
            src="/ucap-logo.png"
            alt="UCAP program logo"
            className="h-20 mb-3"
          />

          <h2 className="text-4xl font-semibold text-primary mb-3">
            Become an Ulô Certified Associate
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-16 items-center">
          <div className="">
            <img
              src="/icons/BADGE.png"
              alt="UCAP program logo"
              className="h-full mb-3"
            />
          </div>

          <div className="space-y-5 mb-12">
            <p className="text-lg text-gray-600">
              Join a network of professional Associates, get globally certified,
              and earn more. Take the UCAP and unlock $10K+ annual income with
              world-class hospitality training.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base">
              Apply for UCAP Now →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default CTASection;
