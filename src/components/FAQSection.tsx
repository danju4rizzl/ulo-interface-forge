import React from 'react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How do I get started with Ulo Business Profile?",
      answer: "Getting started is easy and free. Simply click \"Get started\" and follow the steps to create your business profile."
    },
    {
      question: "How long do profile changes take to appear?",
      answer: "Most changes to your Business Profile appear within a few minutes, though some updates may take longer."
    },
    {
      question: "Is Ulo Business Profile really free?",
      answer: "Yes, creating and maintaining your Business Profile on Ulo is completely free."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-normal text-gray-900 mb-12 text-center">
          Your questions, answered
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
