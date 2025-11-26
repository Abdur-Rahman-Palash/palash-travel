import Hero from '../components/Hero';
import PackageList from '../components/PackageList';
import CTASection from '../components/CTASection';
import { packages } from '../data/packages';

export default function Tours() {
  return (
    <div>
      <Hero
        title="Our Packages"
        subtitle="Discover our comprehensive collection of travel packages tailored for you"
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&h=900&fit=crop"
        height="h-96"
        showScrollIndicator={false}
      />

      <PackageList 
        packages={packages} 
        title="All Available Packages" 
        showFilters={true}
      />

      <CTASection
        title="Ready to Book?"
        subtitle="Get in touch with our team to start planning your journey"
        primaryText="Contact Us"
        primaryLink="/contact"
        secondaryText="View Details"
        secondaryLink="/tours"
      />
    </div>
  );
}
