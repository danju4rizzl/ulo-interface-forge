import React from 'react';
import { Button } from '@/components/ui/button';

const PeopleConnections = React.lazy(() => import('./PeopleConnections'))

const AnalyticsSection: React.FC = () => {
  const analyticsStats = [
    { label: "Profile views", value: "8,240" },
    { label: "Search views", value: "5,123" },
    { label: "Direction requests", value: "1,847" },
    { label: "Phone calls", value: "892" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-normal text-gray-900 mb-6">
              Join our community in shaping the future of Africa hospitality.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Become part of our early community and gain access to our
              Intercontinental Conferences, Exclusive perks, Quarterly Tea
              Meetings, Festivals, and all behind-the-scenes updates.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Join the Ulô Circle →
            </Button>
          </div>
          <div>
            {/* PeopleConnections visualization */}
            <React.Suspense
              fallback={
                <div className="flex items-center justify-center h-[260px] w-full">
                  <span className="text-blue-500 animate-pulse text-lg font-medium">
                    Loading connections...
                  </span>
                </div>
              }
            >
              {typeof window !== 'undefined' && <PeopleConnections />}
            </React.Suspense>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AnalyticsSection;
