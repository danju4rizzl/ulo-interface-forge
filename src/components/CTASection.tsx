import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import MailerLiteModal from '@/components/mailer-lite/MailerLiteModal'

const CTASection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const certifiedListItems = [
    'Gain world-class training and certification',
    'Earn up to $20,000 per year',
    'Work remotely while managing stays'
  ]

  const handleApplyClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
              Join a network of trusted professionals who bring Africa closer to
              the world. As an Associate, you’re more than support staff — you
              are the face of hospitality, guiding guests, managing stays, and
              curating experiences that leave lasting memories.
            </p>
            <ul className="mt-6 space-y-1">
              {certifiedListItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-primary font-semibold mr-2 ">
                    <Check strokeWidth={3.3} size={18} />
                  </span>
                  <span className="text-base font-medium  text-primary/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              onClick={handleApplyClick}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base"
            >
              Apply for UCAP Now →
            </Button>
          </div>
        </div>
      </div>

      {/* MailerLite Modal for Associates */}
      <MailerLiteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        userType="associate"
      />
    </section>
  )
}

export default CTASection
