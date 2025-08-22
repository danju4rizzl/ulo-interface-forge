// Example usage patterns for the FAQSection accordion component
import React from 'react'
import FAQSection from '@/components/FAQSection'

// Example 1: Default usage with built-in FAQs
export const DefaultFAQExample = () => {
  return <FAQSection />
}

// Example 2: Custom FAQs for a different product/service
export const CustomFAQExample = () => {
  const productFAQs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secured with 256-bit SSL encryption."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 business days) and overnight shipping options are also available at checkout."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition. Returns are free, and we'll provide a prepaid shipping label."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination."
    }
  ]

  return <FAQSection faqs={productFAQs} />
}

// Example 3: Technical support FAQs
export const TechnicalFAQExample = () => {
  const techFAQs = [
    {
      question: "How do I reset my password?",
      answer: "Click the 'Forgot Password' link on the login page, enter your email address, and follow the instructions in the reset email we send you."
    },
    {
      question: "Why can't I access my account?",
      answer: "This could be due to several reasons: incorrect login credentials, account suspension, or browser issues. Try clearing your browser cache or contact support if the problem persists."
    },
    {
      question: "How do I update my billing information?",
      answer: "Go to Account Settings > Billing, click 'Edit Payment Method', and update your information. Changes take effect immediately for future billing cycles."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security measures. Your data is stored on secure servers and we never share personal information with third parties."
    },
    {
      question: "How do I delete my account?",
      answer: "To delete your account, go to Account Settings > Privacy, scroll to the bottom, and click 'Delete Account'. This action is permanent and cannot be undone."
    }
  ]

  return <FAQSection faqs={techFAQs} />
}

// Example 4: Service-specific FAQs
export const ServiceFAQExample = () => {
  const serviceFAQs = [
    {
      question: "What's included in the basic plan?",
      answer: "The basic plan includes up to 5 projects, 10GB storage, email support, and access to all core features. Perfect for individuals and small teams."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all premium features. No credit card required to start your trial."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. You can either upgrade your plan or we'll temporarily restrict certain features until the next billing cycle."
    }
  ]

  return <FAQSection faqs={serviceFAQs} />
}

// Example 5: Multiple FAQ sections on the same page
export const MultipleFAQSections = () => {
  const generalFAQs = [
    {
      question: "What is Ulo?",
      answer: "Ulo is a comprehensive platform for managing short-term rentals with hands-free automation and guest experience features."
    },
    {
      question: "How does pricing work?",
      answer: "Our pricing is based on the number of properties you manage. We offer flexible plans starting from $29/month per property."
    }
  ]

  const technicalFAQs = [
    {
      question: "What integrations do you support?",
      answer: "We integrate with major booking platforms like Airbnb, Booking.com, VRBO, and many property management systems."
    },
    {
      question: "Is there an API available?",
      answer: "Yes, we provide a comprehensive REST API for custom integrations. Documentation and API keys are available in your dashboard."
    }
  ]

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">General Questions</h2>
        <FAQSection faqs={generalFAQs} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">Technical Questions</h2>
        <FAQSection faqs={technicalFAQs} />
      </div>
    </div>
  )
}

// Example 6: FAQ with longer content
export const LongContentFAQExample = () => {
  const longFAQs = [
    {
      question: "What is your comprehensive data protection policy?",
      answer: `We take data protection seriously and comply with GDPR, CCPA, and other international privacy regulations. 

Our data protection measures include:
• End-to-end encryption for all data transmission
• Regular security audits and penetration testing
• Strict access controls and employee training
• Automated backup systems with 99.9% uptime guarantee
• Data retention policies that automatically delete old data
• Transparent privacy policy with clear opt-out options

We never sell your personal data to third parties and only use it to provide and improve our services. You have full control over your data and can request deletion at any time.`
    },
    {
      question: "How does your customer support system work?",
      answer: `Our customer support is available 24/7 through multiple channels:

**Live Chat**: Instant support during business hours (9 AM - 6 PM EST)
**Email Support**: Response within 2 hours for urgent issues, 24 hours for general inquiries
**Phone Support**: Available for premium customers
**Help Center**: Comprehensive documentation and video tutorials
**Community Forum**: Connect with other users and get peer support

Our support team consists of product experts who can help with technical issues, billing questions, and feature guidance. We also offer onboarding sessions for new customers to ensure you get the most out of our platform.`
    }
  ]

  return <FAQSection faqs={longFAQs} />
}

export default {
  DefaultFAQExample,
  CustomFAQExample,
  TechnicalFAQExample,
  ServiceFAQExample,
  MultipleFAQSections,
  LongContentFAQExample
}
