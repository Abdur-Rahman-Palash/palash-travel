import React from 'react'
import Hero from '../components/Hero'
import ArticlesSection from '../components/ArticlesSection'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <div>
      <Hero
        title="Explore the World"
        subtitle="Over 35 years of Travel Service Experience – Journey With Us"
        // using an external CDN is fine for hero bg; or use public/images/... via getUrl if you prefer
        backgroundImage="https://i.ibb.co/S4BmGhcg/shutterstock-1985513846-scaled.jpg"
        ctaText="Explore Packages"
        ctaLink="/tours"
      />

      <div className="animate-fadeInUp">
        <ArticlesSection />
      </div>

      <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <Testimonials />
      </div>

      <div className="animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        <CTASection
          title="What Are You Waiting For?"
          subtitle="Start planning your unforgettable journey today"
          primaryText="Explore All Packages"
          primaryLink="/tours"
          secondaryText="Get In Touch"
          secondaryLink="/contact"
        />
      </div>
      <ChatWidget />
    </div>
  )
}
