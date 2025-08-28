import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import MailerLiteModal from '@/components/mailer-lite/MailerLiteModal'

const HowToJoinSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState<
    'host' | 'guest' | 'associate'
  >('host')

  const handleUserTypeClick = (userType: 'host' | 'guest' | 'associate') => {
    setSelectedUserType(userType)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="" id="how-to-join-section">
      {/* User selection section */}

      <div className="max-w-6xl mx-auto mb-5">
        <h2 className="text-4xl font-semibold text-primary mb-24 text-center ">
          How do you want to experience Ulô
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Host Column */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Host</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Share your home. <br />
                  Earn from it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Become a Host on Ulô and open your doors to the world. List
                  your property, welcome global guests, and earn income while
                  Ulô handles bookings, payments, and support.
                </p>
              </div>
              <button
                onClick={() => handleUserTypeClick('host')}
                className="ml-4 p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Guest Column */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center  mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Guest</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Explore Africa. Stay connected.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Discover unique homes, authentic stays, and cultural
                  experiences across Africa. With Ulô, booking is simple,
                  payments are secure, and every trip feels like home.
                </p>
              </div>
              <button
                onClick={() => handleUserTypeClick('guest')}
                className="ml-4 p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Associate Column */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Associate
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Represent. Guide. Earn Globally.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Step into the world of hospitality as an Ulô Certified
                  Associate. Build global guest connections, represent Ulô
                  professionally, work remotely, and earn up to $20,000
                  annually.
                </p>
              </div>
              <button
                onClick={() => handleUserTypeClick('associate')}
                className="ml-4 p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-20">
        {/* Overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-primary/80 z-10 "></div> */}

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid justify-center">
            <div className="text-center">
              <h2 className="capitalize text-6xl font-medium text-primary mb-6">
                Join our community.
              </h2>
              <p className="text-lg text-primary mb-8">
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
      </div>

      {/* MailerLite Modal */}
      <MailerLiteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userType={selectedUserType}
      />
    </section>
  )
}

export default HowToJoinSection
