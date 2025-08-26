import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VideoShowcaseSection from '@/components/VideoShowcaseSection'
import VideoContentSection from '@/components/VideoContentSection'
import FeaturesSection from '@/components/FeaturesSection'
import BusinessShowcaseSection from '@/components/BusinessShowcaseSection'
import HowToJoinSection from '@/components/HowToJoinSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import ScrollDotsSection from '@/components/ScrollDotsSection'
import AncillaryServicesShowcase from '@/components/AncillaryServicesShowcase'
import { heroContent, businessSlides, flippedSlides } from '@/data'
import MusicToggleButton from '@/components/MusicToggleButton'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="">
        <HeroSection heroContent={heroContent} />

        <VideoShowcaseSection heroContent={heroContent} />

        <ScrollDotsSection />

        <VideoContentSection
          title1="Hands‑Free Management"
          subtitle1="From bookings to check-outs, Ulô handles it all. You earn. Guests enjoy. Hosting becomes effortless."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200066/INTRO_HANDS-FREE_v0fw1m.mp4"
          title2="Focus on what matters most"
          subtitle2="With Ulô Associates handling the chats, check-ins, and care, hosting feels easy — and guests feel at home."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200044/CHAT_koyihu.mp4"
          listItems={[
            'Automated booking management',
            '24/7 guest communication & support',
            'Seamless check-in, check-out & cleaning'
          ]}
          sectionId="handsfree-section"
        />

        <VideoContentSection
          title1="Xperience Gallery"
          subtitle1="From vibrant cities to hidden gems, Ulô shows it all. You explore. You connect. Travel becomes unforgettable."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200081/INTRO_XPE-_1_yoovjb.mp4"
          title2="See the soul of every stay"
          subtitle2="Ulô’s Xperience Gallery brings homes and journeys to life — inspiring trust, connection, and the excitement of what’s ahead."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200146/XPE._DEMO_FULL_li5hau.mp4"
          listItems={[
            'Explore reels of vibrant cities and hidden gems',
            'Create your own city story',
            'Share with friends and inspire travelers worldwide'
          ]}
          sectionId="xperience-section"
        />

        <VideoContentSection
          title1="Borderless Payment"
          subtitle1="From bookings to extras, Ulô Cowries handles it all. You get paid. Guests enjoy. Transactions stay seamless."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200048/PAYMENT_pkdt2y.mp4"
          title2="Seamless Journeys, Simple Payments"
          subtitle2="With Ulô Cowries, guests pay in their way, hosts earn without delays, and every transaction feels simple and worry-free."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200053/HOME_PAYMENT_qnvakc.mp4"
          listItems={[
            'Convert with USD valuation — 1 ACW = 1 USD',
            'Share Cowries easily with family & friends',
            'Withdraw in any African currency with ease'
          ]}
          sectionId="borderless-section"
        />

        <VideoContentSection
          title1="Ulô Associates"
          subtitle1="Your personal city companion. Managing your stay, guiding your steps, and making every moment smoother."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200085/INTRO_TOUR_cycmao.mp4"
          title2="Feel the city, not the stress"
          subtitle2="With Ulô Associates, guests are welcomed like family, guided through culture and hidden gems, and supported every step for a truly effortless stay."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756200069/GUEST_TOUR_FULL_oc7fdk.mp4"
          listItems={[
            'Welcome you at check-in and ensure comfort',
            'Connect you with culture, tours, and hidden gems',
            'Handle safety, logistics, and local support'
          ]}
          sectionId="handsfree-section"
        />
        <FeaturesSection />

        {/* <BusinessShowcaseSection businessSlides={businessSlides} /> */}

        <AncillaryServicesShowcase
          slides={flippedSlides}
          sectionTitle="Go Beyond the Stay"
        />

        <VideoContentSection
          title1="Guest Handbook"
          subtitle1="Your passport
        to belonging. More than directions, it’s a city companion — phrases,
        etiquette, safe spots, and local gems that let you explore Africa
        with confidence and respect."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756208494/INTRO_HANDBOOK_1_et6nsp.mp4"
          listItems={[
            'Navigate easily',
            'Connect authentically',
            'Access help when needed'
          ]}
          sectionId="guest-section"
          isLooped={false}
        />
        <CTASection />

        <HowToJoinSection />

        <FAQSection />

        <Footer />
      </div>
      {/* 
      <MusicToggleButton containerClassName="fixed left-8 bottom-8 z-50 hover:opacity-100 opacity-70" /> */}
    </div>
  )
}

export default Index
