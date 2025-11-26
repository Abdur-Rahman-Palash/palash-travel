export const packages = [
  {
    id: 1,
    title: "Hajj Complete Package 2025",
    description: "Complete Hajj experience with accommodation, meals, and guidance",
    price: 5999,
    duration: "14 Days",
    location: "Saudi Arabia",
    category: "Hajj",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&h=400&fit=crop",
    badge: "Most Popular",
    itinerary: [
      "Arrival and orientation",
      "Ihram and Tawaf",
      "Mount Arafat experience",
      "Muzdalifah night",
      "Stoning ritual",
      "Eid celebration"
    ],
    includes: ["Flights", "Accommodation", "Meals", "Local Guide", "Transportation"],
    excludes: ["Visa Processing", "Travel Insurance"],
    fullDescription: "Our most comprehensive Hajj package includes everything you need for a meaningful pilgrimage..."
  },
  {
    id: 2,
    title: "Umrah Lite Package",
    description: "Essential Umrah package with hotel and basic amenities",
    price: 1499,
    duration: "7 Days",
    location: "Saudi Arabia",
    category: "Umrah",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop",
    badge: "Budget Friendly",
    itinerary: ["Arrival", "Tawaf", "Sa'i", "Umrah completion", "Free time"],
    includes: ["Hotel", "Meals", "Transportation"],
    excludes: ["Flights", "Visas"],
    fullDescription: "An affordable Umrah option perfect for first-timers..."
  },
  {
    id: 3,
    title: "Umrah Premium Experience",
    description: "Luxurious Umrah with 5-star accommodation and private guide",
    price: 3299,
    duration: "10 Days",
    location: "Saudi Arabia",
    category: "Umrah",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    badge: "Luxury",
    itinerary: ["VIP Arrival", "Umrah rituals", "City tours", "Shopping", "Relaxation"],
    includes: ["5-Star Hotel", "Premium Meals", "Private Transfers", "Personal Guide"],
    excludes: ["International Flights"],
    fullDescription: "Experience Umrah in absolute comfort and style..."
  },
  {
    id: 4,
    title: "Islamic Europe Tour",
    description: "Explore Islamic heritage in Spain, Turkey, and Southern Europe",
    price: 2899,
    duration: "12 Days",
    location: "Europe",
    category: "Tours",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
    badge: "Fan Favorite",
    itinerary: ["Granada", "Cordoba", "Seville", "Istanbul", "Blue Mosque"],
    includes: ["Hotels", "Meals", "Guided Tours", "Transportation"],
    excludes: ["Flights"],
    fullDescription: "Journey through Europe's rich Islamic history..."
  },
  {
    id: 5,
    title: "Holy Cities Day Trips",
    description: "Guided day tours of Madinah and surrounding Islamic sites",
    price: 399,
    duration: "1-2 Days",
    location: "Saudi Arabia",
    category: "Tours",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop",
    itinerary: ["Prophet's Mosque", "Mount Uhud", "Badr", "Historical sites"],
    includes: ["Guide", "Transportation", "Meals"],
    excludes: ["Accommodation"],
    fullDescription: "Explore the historical significance of these holy cities..."
  },
  {
    id: 6,
    title: "Hajj VIP Concierge",
    description: "Ultra-luxury Hajj with personal concierge and premium services",
    price: 8999,
    duration: "16 Days",
    location: "Saudi Arabia",
    category: "Hajj",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&h=400&fit=crop",
    badge: "VIP Elite",
    itinerary: [
      "Personalized itinerary",
      "VIP tent accommodation",
      "Personal guide",
      "All rituals with expert guidance"
    ],
    includes: [
      "Premium Flights",
      "Luxury Accommodation",
      "All Meals",
      "Personal Guide",
      "24/7 Concierge",
      "Airport Transfers"
    ],
    excludes: ["Optional excursions"],
    fullDescription: "The pinnacle of Hajj experiences with unparalleled service..."
  },
  {
    id: 7,
    title: "Family Umrah Getaway",
    description: "Umrah package designed for families with kids",
    price: 4899,
    duration: "8 Days",
    location: "Saudi Arabia",
    category: "Umrah",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop",
    badge: "Family",
    itinerary: [
      "Kid-friendly accommodation",
      "Umrah rituals",
      "Theme parks",
      "Shopping malls",
      "Beach time"
    ],
    includes: [
      "Family Room",
      "All Meals",
      "Transfers",
      "Family Activities",
      "Travel Insurance"
    ],
    excludes: ["International Flights"],
    fullDescription: "Create wonderful memories with your family..."
  },
  {
    id: 8,
    title: "Jordan & Palestine Holy Land Tour",
    description: "Multi-country tour of significant Islamic and Biblical sites",
    price: 2199,
    duration: "9 Days",
    location: "Middle East",
    category: "Tours",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    itinerary: [
      "Amman",
      "Petra",
      "Dead Sea",
      "Jerusalem",
      "Bethlehem",
      "Jericho"
    ],
    includes: [
      "Hotels",
      "Guided Tours",
      "Meals",
      "Transportation",
      "Entry Fees"
    ],
    excludes: ["International Flights"],
    fullDescription: "Walk in the footsteps of prophets..."
  }
];

export const featured = packages.slice(0, 6);
