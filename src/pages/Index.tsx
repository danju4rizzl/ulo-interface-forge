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
          subtitle1="From bookings to check-outs, Ulô handles it all.
You earn. Guests enjoy. Hosting becomes effortless."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1755679918/INTRO_HANDS-FREE_1_xaf6dm.mp4"
          title2="Focus on what matters most"
          subtitle2="With Ulô Associates handling the chats, check-ins, and care, hosting feels easy — and guests feel at home."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1755678805/CHAT_yhqlk5.mp4"
          sectionId="handsfree-section"
        />

        <VideoContentSection
          title1="Xperience Gallery"
          subtitle1="From vibrant cities to hidden gems, Ulô shows it all.
 You explore. You connect. Travel becomes unforgettable."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1755678832/INTRO_XPE-_1_utrzia.mp4"
          title2="See the soul of every stay"
          subtitle2="Ulô’s Xperience Gallery brings homes and journeys to life — inspiring trust, connection, and the excitement of what’s ahead."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1755678875/XPE._DEMO_FULL_gdkkmm.mp4"
          sectionId="handsfree-section"
        />

        <VideoContentSection
          title1="Borderless Payment"
          subtitle1="From bookings to extras, Ulô Cowries handles it all.
You get paid. Guests enjoy. Transactions stay seamless."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1755683872/PAYMENT_UI_vjtgta.mp4"
          title2="Enjoy every moment, not the money stress"
          subtitle2="With Ulô Cowries, guests pay in their way, hosts earn without delays, and every transaction feels simple and worry-free."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1752584118/PAYMENT_xomfml.mp4"
          sectionId="handsfree-section"
        />

        <VideoContentSection
          title1="Hello!!!"
          subtitle1="From bookings to extras, Ulô Cowries handles it all.
You get paid. Guests enjoy. Transactions stay seamless."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1755683872/PAYMENT_UI_vjtgta.mp4"
          title2="Enjoy every moment, not the money stress"
          subtitle2="With Ulô Cowries, guests pay in their way, hosts earn without delays, and every transaction feels simple and worry-free."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1752584118/PAYMENT_xomfml.mp4"
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
          subtitle1="From bookings to extras, Ulô Cowries handles it all.
You get paid. Guests enjoy. Transactions stay seamless."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1755683872/PAYMENT_UI_vjtgta.mp4"
          title2="Enjoy every moment, not the money stress"
          subtitle2="With Ulô Cowries, guests pay in their way, hosts earn without delays, and every transaction feels simple and worry-free."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/v1752584118/PAYMENT_xomfml.mp4"
          sectionId="handsfree-section"
        />
        <CTASection />

        <HowToJoinSection />

        <FAQSection />

        <Footer />
      </div>

      <MusicToggleButton containerClassName="fixed left-8 bottom-8 z-50 hover:opacity-100 opacity-70" />
    </div>
  )
}

export default Index
