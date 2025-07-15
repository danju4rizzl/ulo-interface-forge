import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
              50% of consumers who conducted a local search on their
              smartphone visited a store within a day
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Source: Think with Ulo, "How Mobile has Changed What It Means to
              Shop Local," May 2019.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Get started
            </Button>
          </div>
          <div>
            <Card className="bg-white shadow-lg border-0 shadow-gray-200/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Performance insights
                </h3>
                <div className="space-y-4">
                  {analyticsStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-medium text-gray-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-32 bg-blue-50 rounded flex items-end justify-center">
                  <div className="text-blue-600 text-sm">
                    Chart visualization
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
