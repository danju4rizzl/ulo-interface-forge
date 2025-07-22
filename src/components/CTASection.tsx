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
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/ucap-logo.png"
          alt="UCAP program logo"
          className="h-28 mb-3 mx-auto"
        />

        <div className="text-center mb-12">
          <h2 className="text-4xl font-normal text-gray-900 mb-4">
            Become an Ulô Certified Associate
          </h2>
          <p className="text-lg text-gray-600">
            Join a network of professional Associates, get globally certified,
            and earn more. Take the UCAP and unlock $10K+ annual income with
            world-class hospitality training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ctaFeatures.map((feature, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base">
          Apply for UCAP Now →
        </Button>
      </div>
    </section>
  )
};

export default CTASection;
