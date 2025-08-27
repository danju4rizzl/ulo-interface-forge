import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs?: FAQItem[]
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What countries can I travel to with Ulô?',
    answer:
      'Ulô starts in Nigeria and will grow to four more African countries soon. You can enjoy top cities now, with more choices coming your way.'
  },
  {
    question: 'How long do profile changes take to appear?',
    answer:
      'Yes. After training, you’ll earn a global certificate that shows you’re trusted in guest care and culture. It also opens more work chances with Ulô and beyond.'
  },
  {
    question: 'Is hosting on Ulô safe for me?',
    answer:
      'Yes. Guests are verified, payments are secure, and our Associates are there to support. You host with ease, we handle the rest.'
  }
]

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFAQs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleFAQ(index)
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background blur gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl font-normal text-gray-900 dark:text-white mb-12 text-center drop-shadow-md">
          Your questions, answered
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                  type="button"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={!isExpanded}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
