import React from 'react'
import BlurText from '../components/BlurText'

const BlurTextExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">
        {/* Example with cycling suffix */}
        <BlurText
          text="Don't just visit"
          suffix={['Africa', 'Lagos', 'Cape Town', 'Kenya']}
          cycleInterval={3000}
          className="text-4xl font-bold"
          animateBy="words"
          direction="top"
        />

        <div className="mt-8">
          {/* Example with different cycling interval */}
          <BlurText
            text="Experience the beauty of"
            suffix={['Morocco', 'Egypt', 'Tanzania', 'South Africa']}
            cycleInterval={2500}
            className="text-2xl"
            animateBy="words"
            direction="bottom"
          />
        </div>

        <div className="mt-8">
          {/* Example without cycling (static text) */}
          <BlurText
            text="Static text without cycling"
            className="text-xl text-gray-400"
            animateBy="words"
          />
        </div>
      </div>
    </div>
  )
}

export default BlurTextExample
