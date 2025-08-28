import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { Button } from '@/components/ui/button'
import MailerLiteModal from '@/components/mailer-lite/MailerLiteModal'

export interface HowToJoinSectionRef {
  highlightCards: () => void
}

const HowToJoinSection = forwardRef<HowToJoinSectionRef>((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState<
    'host' | 'guest' | 'associate'
  >('host')
  const [isHighlighting, setIsHighlighting] = useState(false)

  const hostCardRef = useRef<HTMLDivElement>(null)
  const guestCardRef = useRef<HTMLDivElement>(null)
  const associateCardRef = useRef<HTMLDivElement>(null)

  const handleUserTypeClick = (userType: 'host' | 'guest' | 'associate') => {
    setSelectedUserType(userType)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const highlightCards = () => {
    setIsHighlighting(true)
    setTimeout(() => {
      setIsHighlighting(false)
    }, 1000)
  }

  useImperativeHandle(ref, () => ({
    highlightCards
  }))

  return (
    <section className="" id="how-to-join-section">
      {/* User selection section */}

      <div className="max-w-6xl mx-auto mb-5">
        <h2 className="text-4xl font-semibold text-primary mb-24 text-center ">
          How do you want to experience Ulô
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Host Column */}
          <div
            ref={hostCardRef}
            className={`bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 ${
              isHighlighting
                ? 'ring-4 ring-primary/50 shadow-2xl transform scale-105 bg-primary/5'
                : ''
            }`}
          >
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
          <div
            ref={guestCardRef}
            className={`bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 ${
              isHighlighting
                ? 'ring-4 ring-primary/50 shadow-2xl transform scale-105 bg-primary/5'
                : ''
            }`}
          >
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
          <div
            ref={associateCardRef}
            className={`bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 ${
              isHighlighting
                ? 'ring-4 ring-primary/50 shadow-2xl transform scale-105 bg-primary/5'
                : ''
            }`}
          >
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
      </div>

      {/* MailerLite Modal */}
      <MailerLiteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userType={selectedUserType}
      />
    </section>
  )
})

export default HowToJoinSection
