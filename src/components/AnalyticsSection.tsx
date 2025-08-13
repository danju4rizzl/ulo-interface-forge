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
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="community-section"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dfcsaxtru/video/upload/q_50/v1754588073/NETWORKING_dkacxc.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-primary/80 z-10 "></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="grid justify-center">
          <div className="text-center">
            <h2 className="capitalize text-6xl font-medium text-white mb-6">
              Join our community.
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Become part of our early community and gain access to our
              Intercontinental Conferences, Exclusive perks, Quarterly Tea
              Meetings, Festivals, and all behind-the-scenes updates.
            </p>

            <div className="flex justify-center">
              <a
                href="https://slack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-white hover:bg-primary text-gray-800 hover:text-white px-10 py-6 rounded-md border border-gray-200 shadow-sm flex items-center gap-3 font-medium text-lg">
                  <svg
                    className="w-6 h-6"
                    enable-background="new 0 0 2447.6 2452.5"
                    viewBox="0 0 2447.6 2452.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipRule="evenodd" fillRule="evenodd">
                      <path
                        d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                        fill="#36c5f0"
                      />
                      <path
                        d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                        fill="#2eb67d"
                      />
                      <path
                        d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                        fill="#ecb22e"
                      />
                      <path
                        d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                        fill="#e01e5a"
                      />
                    </g>
                  </svg>
                  Join us on Slack
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AnalyticsSection;
