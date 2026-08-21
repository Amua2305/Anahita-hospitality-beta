import { Property, ServiceItem, TeamMember, GalleryItem, GlobalOffice, Testimonial, WeddingPackage, TravelDestination, MiceService, BlogPost } from '../types';

export const SIGNATURE_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    name: 'The Anahita Overwater Sanctuary',
    location: 'North Malé Atoll, Maldives',
    category: 'Resort',
    rating: 4.98,
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ',
    galleryImages: [
      'https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'An iconic 42-key ultra-luxury overwater sanctuary featuring private infinity plunge pools, glass floor viewing portals, and bespoke butler service.',
    keysCount: 42,
    occupancyRate: '92%',
    roiIncrease: '+28.4% YoY',
    highlights: ['Private Sunset Pavilions', 'Undersea Dining Room', 'Solar-Powered Eco Infrastructure', 'Michelin-starred Culinary Team'],
    architect: 'Kengo Kuma Associates'
  },
  {
    id: 'prop-2',
    name: 'Villa Anahita Cliffside Estate',
    location: 'Positano, Amalfi Coast, Italy',
    category: 'Villa',
    rating: 4.96,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'A 17th-century restored cliffside estate overlooking the Mediterranean with terraced lemon groves, private yacht mooring, and Michelin-trained private chefs.',
    keysCount: 12,
    occupancyRate: '88%',
    roiIncrease: '+31.2% YoY',
    highlights: ['Private Helipad & Dock', 'Ancient Wine Cave', 'Heated Cliffside Infinity Pool', 'Sub-Zero Wellness Spa'],
    architect: 'Studio Peregalli Milan'
  },
  {
    id: 'prop-3',
    name: 'Anahita Sanctuary Kyoto',
    location: 'Higashiyama, Kyoto, Japan',
    category: 'Sanctuary',
    rating: 4.99,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'A serene Ryokan-inspired sanctuary tucked into bamboo groves, blending traditional Sukiya architecture with modern sensory wellness and tea ceremonies.',
    keysCount: 24,
    occupancyRate: '94%',
    roiIncrease: '+24.6% YoY',
    highlights: ['Natural Geothermal Onsen', 'Zen Rock Meditation Gardens', 'Kaiseki Dining Pavilion', 'Certified Sommelier Library'],
    architect: 'Shigeru Ban Architects'
  },
  {
    id: 'prop-4',
    name: 'Anahita Alpine Chalet & Lodge',
    location: 'Courchevel 1850, French Alps',
    category: 'Lodge',
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'Ski-in/ski-out chalet luxury boasting copper fireplaces, private ski concierges, custom cigar lounges, and panoramic alpine views.',
    keysCount: 16,
    occupancyRate: '96% (Winter Peak)',
    roiIncrease: '+35.0% YoY',
    highlights: ['Ski-in/Ski-out Access', 'Indoor Hydrotherapy Complex', 'Caviar & Champagne Bar', 'Private Cinema Salon'],
    architect: 'Jean-Michel Gathy'
  },
  {
    id: 'prop-5',
    name: 'The Anahita Palm Estate',
    location: 'Emirates Hills, Dubai, UAE',
    category: 'Estate',
    rating: 4.97,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200'
    ],
    description: 'A palatial 35,000 sq.ft private estate with golf course vistas, underground supercar gallery, temperature-controlled outdoor lagoons, and security detail.',
    keysCount: 10,
    occupancyRate: '85%',
    roiIncrease: '+29.8% YoY',
    highlights: ['Underground Supercar Gallery', '18-Hole Private Golf Access', 'Biometric Security Protocol', 'Private Oxygen Bar Spa'],
    architect: 'Foster + Partners'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Weddings & Celebrations',
    subtitle: 'Grand Destination Weddings & Royal Celebrations (Vision Vivaah Standard)',
    description: 'We orchestrate unforgettable destination weddings in royal Rajasthan palaces, Maldivian sandbanks, and Amalfi Coast cliffside estates with complete decor, entertainment, and guest management.',
    iconName: 'Crown',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    deliverables: [
      'Royal Palace & Island Venue Buyouts',
      'Bespoke Theme Production & Floral Design',
      'Michelin & Royal Heritage Catering',
      'Celebrity Artist & Entertainment Management'
    ],
    metric: '100% Guest Delight & Flawless Execution'
  },
  {
    id: 'srv-2',
    title: 'Domestic Travel',
    subtitle: 'Luxury Domestic Destination & Expeditions',
    description: 'Experience India’s finest heritage through Maharajas’ Express train journeys, royal Rajasthan fort stays, Himalayan wellness retreats, and Kerala backwater houseboat cruises.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000',
    deliverables: [
      'Maharajas’ Express Luxury Train Charters',
      'Royal Fort & Palace Heritage Suites',
      'Himalayan Ayurvedic Wellness Retreats',
      'Private Helicopter & Luxury Chauffeur Escorts'
    ],
    metric: 'VIP Domestic Destination Access Across India'
  },
  {
    id: 'srv-3',
    title: 'International Travel',
    subtitle: 'Outbound international holidays & Charters',
    description: 'Curated international holidays featuring private overwater island retreats in Maldives, Amalfi Coast superyachts, Kyoto zen tea sanctuaries, and Courchevel Alpine chalets.',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000',
    deliverables: [
      'Private Jet & Seaplane Chartering',
      'Exclusive Villa & Superyacht Buyouts',
      'After-Hours VIP Access to international Landmarks',
      '24/7 Dedicated Personal Concierge'
    ],
    metric: 'Bespoke international Travel Tailored to You'
  },
  {
    id: 'srv-4',
    title: 'MICE & Corporate Events',
    subtitle: 'Meetings, Incentives, Conferences & Exhibitions (MICEpro Standard)',
    description: 'Turnkey management for high-security C-suite board meetings, employee incentive retreats, international corporate conventions, and high-impact product launches.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    deliverables: [
      'C-Suite Board Summits & Leadership Escapes',
      'Top Performer Incentive Journeys',
      'Global Keynote Conventions & Stage Tech',
      'Luxury Product Expos & Launch Galas'
    ],
    metric: 'Flawless Execution for international Corporates'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Ananya Rao',
    role: 'Founder & Managing Director',
    bio: 'Over 16 years pioneering luxury hospitality, bespoke travel curation, and grand wedding productions.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    location: 'Delhi NCR'
  },
  {
    id: 'tm-2',
    name: 'Marcus Vance',
    role: 'Head of Destination Weddings',
    bio: 'Renowned event artisan specializing in royal palace weddings, European cliffside celebrations, and multi-day luxury wedding productions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    location: 'Delhi NCR'
  },
  {
    id: 'tm-3',
    name: 'Evelyn Thorne',
    role: 'Director of Luxury Travel & Expeditions',
    bio: 'Expert in bespoke domestic expeditions, Maharajas’ Express charters, and private island escapes across the globe.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    location: 'Delhi NCR'
  },
  {
    id: 'tm-4',
    name: 'Devraj Kapoor',
    role: 'Head of MICE & Corporate Events',
    bio: '16+ years designing high-security C-suite summits, corporate conventions, and luxury brand launches worldwide.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    location: 'Delhi NCR'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Hotels
  {
    id: 'gal-h1',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-h2',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-h3',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-h4',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-h5',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-h6',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200'
  },

  // Weddings
  {
    id: 'gal-w1',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-w2',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-w3',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-w4',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-w5',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-w6',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200'
  },

  // Events
  {
    id: 'gal-e1',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-e2',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-e3',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-e4',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-e5',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-e6',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200'
  },

  // Travel
  {
    id: 'gal-t1',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-t2',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-t3',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-t4',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-t5',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'gal-t6',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1200'
  }
];

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    city: 'Delhi NCR',
    country: 'India (Headquarters)',
    address: 'B-88, Sector-2, Noida, Uttar Pradesh 201301',
    phone: '+91 8840129250',
    email: 'info.anahitahospitality@gmail.com',
    timezone: 'IST (UTC+5:30)',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800',
    coordinates: { x: 68, y: 48 }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Anahita organized our 3-day royal palace wedding in Udaipur with absolute perfection. Every detail from the Lake Pichola boat procession to the floral architecture was magical.',
    author: 'Radhika & Vikram Singhania',
    role: 'Destination Wedding Couple',
    property: 'Udaipur Royal Palace Celebration',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't-2',
    quote: 'Our Maharajas’ Express train journey and Kerala backwater houseboat charter planned by Anahita was the most magnificent luxury holiday our family has ever experienced.',
    author: 'Aarav Malhotra',
    role: 'Private Luxury Traveler',
    property: 'Maharajas’ Express & Kerala Expedition',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't-3',
    quote: 'Anahita managed our C-suite global leadership summit for 250 delegates in Dubai with flawless precision. Their MICE event coordination is truly world-class.',
    author: 'Rajiv Mehta',
    role: 'VP Global Operations, TechCorp International',
    property: 'Dubai C-Suite MICE Summit',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation & Vision Mapping',
    desc: 'We discuss your dream wedding, luxury holiday itinerary, or corporate event goals to map out a bespoke concept and budget.'
  },
  {
    step: '02',
    title: 'Curated Planning & Design',
    desc: 'Our team secures palace buyouts, private charters, custom theme sets, and top-tier vendors tailored specifically to your vision.'
  },
  {
    step: '03',
    title: 'Seamless On-Site Execution',
    desc: 'Dedicated event directors and 24/7 personal concierges oversee guest hospitality, flight charters, decor, and live performances.'
  },
  {
    step: '04',
    title: 'Unforgettable Memories',
    desc: 'Enjoy a stress-free luxury experience with lasting memories, complete guest care, and post-event support.'
  }
];

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'wed-1',
    title: 'The Royal Lake Palace Sovereign Wedding',
    category: 'Royal Palace',
    location: 'Udaipur, Rajasthan, India',
    guestCapacity: '150 - 400 Guests',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    description: 'An ethereal celebration amidst historic island palaces on Lake Pichola. Includes royal barge processions, vintage car escorts, floral architecture by international designers, and custom Sangeet stages.',
    highlights: ['Royal Boat Arrival for Baraat', 'Custom Theme & Set Production', 'Michelin & Royal Heritage Feast', 'Celebrity Artist & DJ Lineup'],
    startingPrice: 'Bespoke Quote'
  },
  {
    id: 'wed-2',
    title: 'Amalfi Coast Cliffside Soirée',
    category: 'International Riviera',
    location: 'Positano & Ravello, Italy',
    guestCapacity: '80 - 200 Guests',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
    description: 'Cliffside elegance overlooking the Mediterranean. Terraced lemon grove vow ceremonies, private yacht transfers for bridal party, and authentic Italian gastronomy with world-class wine pairings.',
    highlights: ['Private Cliffside Villa Buyout', 'Sunset Yacht Cocktail Cruise', 'Italian Artisanal Decor & Lighting', 'VIP European Concierge'],
    startingPrice: 'Bespoke Quote'
  },
  {
    id: 'wed-3',
    title: 'Maldivian Island Overwater Union',
    category: 'Beachfront Resort',
    location: 'North Malé Atoll, Maldives',
    guestCapacity: '50 - 150 Guests',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ',
    description: 'Exclusive private island takeover with barefoot luxury ceremonies on powder-white sandbanks, glass-bottom pavilion receptions, and underwater champagne dinners.',
    highlights: ['Full Private Island Charter', 'Sandbank Vow Exchange', 'Fireworks over Indian Ocean', 'Personal Butler for Every Villa'],
    startingPrice: 'Bespoke Quote'
  },
  {
    id: 'wed-4',
    title: 'Majestic Heritage Fort Celebration',
    category: 'Heritage Fort',
    location: 'Jaipur & Jodhpur, Rajasthan',
    guestCapacity: '200 - 600 Guests',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    description: 'Grand royal fort weddings featuring illuminated ramparts, traditional Rajasthani folk artists, elephant welcome protocols, and grand pyrotechnic spectacles.',
    highlights: ['Fort Rampart Light Show', 'Elephant & Horse Protocol', 'Royal Rajputana Gastronomy', '3D Projection Mapping'],
    startingPrice: 'Bespoke Quote'
  }
];

export const TRAVEL_DESTINATIONS: TravelDestination[] = [
  // Domestic
  {
    id: 'trv-dom-1',
    title: 'Maharajas\' Express Heritage Expedition',
    region: 'North India',
    isDomestic: true,
    type: 'Luxury Train',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    description: 'Asia’s most luxurious train journey spanning Delhi, Agra, Ranthambore, Jaipur, Bikaner, Jodhpur, and Udaipur with private suite butler service.',
    itineraryHighlights: ['Private Champagne Breakfast at Taj Mahal', 'Tiger Safari in Ranthambore', 'Royal Dinner at Jagmandir Island Palace'],
    exclusiveAccess: 'Presidential Suite Reservation & Private Guide'
  },
  {
    id: 'trv-dom-2',
    title: 'Udaipur & Jodhpur Royal Palace Sanctuaries',
    region: 'Western India',
    isDomestic: true,
    type: 'Palace',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200',
    description: 'Private helicopter transfers between Lake City Udaipur and the Blue City Jodhpur with stays in royal heritage suites.',
    itineraryHighlights: ['Private After-Hours Access to City Palace Museum', 'Sunset Vintage Car Escort', 'Curated Royal Dining Experience'],
    exclusiveAccess: 'Meeting with Royal Family Historians'
  },
  {
    id: 'trv-dom-3',
    title: 'Ananda Himalayan Wellness Sanctuary',
    region: 'Himalayas',
    isDomestic: true,
    type: 'Wellness',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
    description: 'Nestled in the Himalayan foothills overlooking the Ganges, offering custom Ayurvedic detoxes, yoga masterclasses, and pristine mountain air.',
    itineraryHighlights: ['Personalized Ayurvedic Consultation', 'Private Ganga Aarti Ceremony', 'Hydrotherapy & Tibetan Healing'],
    exclusiveAccess: 'Private Villa with Personal Yoga Master'
  },
  {
    id: 'trv-dom-4',
    title: 'Kerala Backwaters Ultra-Luxury Houseboat Sanctuary',
    region: 'South India',
    isDomestic: true,
    type: 'Yacht',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200',
    description: 'Private 2-bedroom glass-encased eco-houseboat with personal master chef, navigating tranquil Kumarakom backwaters.',
    itineraryHighlights: ['Catch-of-the-Day Karimeen Feast', 'Sunset Village Canoe Tour', 'Private Spice Plantation Excursion'],
    exclusiveAccess: 'Solar-Powered Eco Houseboat Buyout'
  },

  // International
  {
    id: 'trv-int-1',
    title: 'Private Overwater Island Escape, Maldives',
    region: 'Maldives & Asia',
    isDomestic: false,
    type: 'Island',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200',
    description: 'Private seaplane charter to an exclusive overwater villa enclave with glass floors, private infinity pool, and personal butler.',
    itineraryHighlights: ['Private Submarine Coral Expedition', 'Undersea Fine Dining', 'Sandbank Champagne Sunset'],
    exclusiveAccess: '24/7 Dedicated European Trained Butler'
  },
  {
    id: 'trv-int-2',
    title: 'Amalfi Coast Superyacht & Villa Odyssey',
    region: 'Europe',
    isDomestic: false,
    type: 'Yacht',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
    description: 'Sail the Tyrrhenian Sea from Capri to Positano aboard a 50m motor yacht with private villa stays along the cliffside.',
    itineraryHighlights: ['Capri Blue Grotto Private Tour', 'Michelin-Starred Dining in Ravello', 'Helicopter Transfer to Mount Vesuvius'],
    exclusiveAccess: 'Access to Private VIP Beach Clubs'
  },
  {
    id: 'trv-int-3',
    title: 'Kyoto Zen & Cherry Blossom Private Sanctuary',
    region: 'Maldives & Asia',
    isDomestic: false,
    type: 'Palace',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
    description: 'Experience private tea ceremonies with Geikos, exclusive temple access closed to public, and Michelin Kaiseki dining.',
    itineraryHighlights: ['Private Evening Access to Daitoku-ji Temple', 'Kaiseki Dinner with Geisha Performance', 'Helicopter Tour over Mt. Fuji'],
    exclusiveAccess: 'Private Master Tea Ceremony & Onsen Suite'
  },
  {
    id: 'trv-int-4',
    title: 'Courchevel Alpine Chalet & Heliskiing',
    region: 'Europe',
    isDomestic: false,
    type: 'Alpine Chalet',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    description: 'Ski-in/ski-out ultra-chalet in Courchevel 1850 with private indoor pool, ski valet, caviar bar, and private mountain guide.',
    itineraryHighlights: ['Heliskiing in Italian Powder Bowls', 'Private Chef Caviar & Truffle Tasting', 'Cryotherapy & Alpine Hydrotherapy'],
    exclusiveAccess: 'Dedicated Olympic Ski Concierge'
  }
];

export const MICE_SERVICES: MiceService[] = [
  {
    id: 'mice-1',
    type: 'Meetings',
    title: 'C-Suite & Board Governance Summits',
    subtitle: 'High-security, confidential environments for pivotal corporate decisions',
    description: 'We orchestrate discreet, high-profile board meetings and executive summits at world-class private estates and 5-star hotel presidential salons.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    capacity: '10 - 50 Executives',
    deliverables: [
      'Encrypted Audio/Visual & Hybrid Streaming Tech',
      'Private Jet & Chauffeur Logistics Control',
      'Bespoke Michelin Dining & Sommelier Pairings',
      '24/7 Diplomatic-Grade Security Protocol'
    ],
    caseStudyMetric: '100% Confidentiality & Seamless Execution'
  },
  {
    id: 'mice-2',
    type: 'Incentives',
    title: 'Ultra-Luxury High Performer Journeys',
    subtitle: 'Rewarding top achievers with unforgettable global experiences',
    description: 'Transforming corporate incentive programs into legendary experiences — from private island takeovers in the Maldives to superyacht charters in Amalfi.',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ',
    capacity: '30 - 300 Guests',
    deliverables: [
      'Private Island & Resort Buyouts',
      'Custom Team Building Escapes & Rally Races',
      'Gala Award Nights with International Artists',
      'Personalized VIP Concierge App for Delegates'
    ],
    caseStudyMetric: '+42% Increase in Channel Partner Loyalty'
  },
  {
    id: 'mice-3',
    type: 'Conferences',
    title: 'Global Corporate Conventions & Keynotes',
    subtitle: 'Immersive stage production, 3D projection, and global summits',
    description: 'End-to-end management of annual general meetings, tech conventions, and leadership summits with cutting-edge stage design and delegate hospitality.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200',
    capacity: '200 - 3,000 Delegates',
    deliverables: [
      'Turnkey Stage, Lighting & LED Array Production',
      'Delegate Registration & RFID Badge Ecosystem',
      'Multi-City Flight & Hotel Block Chartering',
      'Sponsor Pavilion & Exhibition Booth Buildouts'
    ],
    caseStudyMetric: 'Flawless Operation Across 12+ Global Summits'
  },
  {
    id: 'mice-4',
    type: 'Exhibitions',
    title: 'Luxury Product Launches & Expos',
    subtitle: 'Architectural display pavilions for high-end luxury, auto, and jewelry brands',
    description: 'Creating high-impact bespoke product showcases, supercar unveilings, luxury watch expos, and fashion week galas with high media coverage.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    capacity: '500 - 5,000 Visitors',
    deliverables: [
      'Bespoke Booth & Spatial Architecture',
      'VIP Media & Influencer Management',
      'Interactive VR/AR Product Demos',
      'High-Security Asset Protection Protocols'
    ],
    caseStudyMetric: '$50M+ In Immediate Client Sales Lead Generation'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Evolution of High-Yield Hospitality: Elevating ADR and RevPAR in Luxury Resorts',
    slug: 'evolution-high-yield-hospitality',
    category: 'Hospitality Trends',
    readTime: '6 min read',
    date: 'July 28, 2026',
    author: {
      name: 'Amrit Singh',
      role: 'Founder & Senior Managing Partner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
    },
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ',
    excerpt: 'How strategic asset positioning, bespoke butler services, and data-driven revenue management drive exceptional yields across elite hotel properties worldwide.',
    content: [
      'In the modern luxury hospitality landscape, discerning travelers no longer seek mere physical accommodation; they demand transformative, highly curated sensory experiences. For hotel owners and asset managers, achieving sustained growth in Average Daily Rate (ADR) and Revenue Per Available Room (RevPAR) requires a fundamental shift toward hyper-personalized service and distinct brand positioning.',
      'At Anahita Hospitality, our asset management framework focuses on three pillars: architectural ambiance curation, precision dynamic pricing algorithms, and white-glove European butler protocols. Properties under our operational stewardship have consistently seen a 28% increase in net operational margins within 12 months.',
      'By integrating hyper-localized cultural wellness offerings and Michelin-inspired gastronomy, luxury resorts transform standard guest stays into memorable life highlights—driving repeat visits and sovereign brand loyalty.'
    ],
    tags: ['Hospitality Management', 'ADR Elevation', 'RevPAR Strategy', 'Asset Advisory'],
    featured: true
  },
  {
    id: 'blog-2',
    title: 'Curating Royal Palatial Weddings: From Rajasthan Forts to French Riviera Estates',
    slug: 'curating-royal-palatial-weddings',
    category: 'Weddings',
    readTime: '5 min read',
    date: 'July 20, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Global Celebrations Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'An inside look at the complex logistics, architectural lighting, and bespoke culinary curations that transform royal heritage venues into fairytale celebrations.',
    content: [
      'Hosting a multi-day royal wedding across century-old forts or private coastal villas requires military-grade logistical precision blended with poetic artistic flair. Every element, from custom floral installations to private charter arrivals, must reflect the unique heritage and personal aesthetic of the couple.',
      'Our team coordinates directly with heritage conservationists, world-class lighting designers, and Michelin-starred chefs to execute seamless, magical celebrations for up to 2,000 distinguished guests without compromising the venue’s sanctity or guest privacy.',
      'Whether setting up candlelit royal courtyard dinners in Udaipur or private yacht receptions in Saint-Tropez, Anahita ensures every moment becomes an unforgettable chapter in family legacy.'
    ],
    tags: ['Royal Weddings', 'Destination Celebration', 'Palace Venues', 'Event Logistics']
  },
  {
    id: 'blog-3',
    title: 'Sovereign Living: Private Island & Cliffside Estate Acquisitions in 2026',
    slug: 'sovereign-living-private-island-acquisitions',
    category: 'Real Estate',
    readTime: '7 min read',
    date: 'July 14, 2026',
    author: {
      name: 'Devraj Chauhan',
      role: 'Principal Real Estate Strategist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
    },
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Key considerations for ultra-high-net-worth investors acquiring marquee hospitality assets and private sanctuaries in prime global destinations.',
    content: [
      'Marquee real estate assets—such as cliffside villas along the Amalfi Coast, private islands in the Maldives, or heritage hunting lodges in the Himalayas—remain resilient storehouses of capital and generational prestige.',
      'When acquiring premier hospitality or residential assets, investors must evaluate zoning rights, eco-sustainability infrastructure, local luxury tourism demand, and potential rental yields when managed by premier operating brands.',
      'At Anahita Prime Real Estate, we bridge ultra-high-net-worth buyers with off-market, highly confidential property opportunities backed by full legal, operational, and architectural advisory.'
    ],
    tags: ['Luxury Real Estate', 'Private Islands', 'Hospitality Assets', 'Off-Market Investment']
  },
  {
    id: 'blog-4',
    title: 'The Renaissance of Slow Travel: Maharajas’ Express & Backwater Yacht Charters',
    slug: 'renaissance-of-slow-travel-luxury-trains',
    category: 'Luxury Travel',
    readTime: '4 min read',
    date: 'June 30, 2026',
    author: {
      name: 'Sophia Laurent',
      role: 'Private Charters & Journeys Lead',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
    },
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Rediscovering royal corridors through luxury train journeys, private backwater houseboats, and alpine helicopter safaris.',
    content: [
      'In an era dominated by rapid long-haul flights, ultra-discerning travelers are embracing slow, immersive luxury journeys that celebrate the passage through time and scenery.',
      'Traveling across India’s golden triangle aboard the Maharajas’ Express or chartering a private solar-powered luxury cruiser through Kerala’s tranquil backwaters combines royal heritage, 5-star gastronomy, and intimate local cultural access.',
      'Anahita curates fully customized private train cars and luxury houseboats with dedicated private chefs, historians, and wellness therapists on board.'
    ],
    tags: ['Luxury Travel', 'Maharajas Express', 'India Heritage', 'Bespoke Journeys']
  },
  {
    id: 'blog-5',
    title: 'Designing Impactful MICE Assemblies: Where Strategy Meets Sanctuary',
    slug: 'designing-impactful-mice-assemblies',
    category: 'MICE & Leadership',
    readTime: '5 min read',
    date: 'June 18, 2026',
    author: {
      name: 'Amrit Singh',
      role: 'Founder & Senior Managing Partner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
    },
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Why C-suite boards and tech innovators are ditching traditional convention halls for secluded, high-tech luxury sanctuaries.',
    content: [
      'Corporate conventions and board retreats are undergoing a major shift. Modern enterprise leaders recognize that high-impact strategic alignment happens when executives are placed in inspiring, distraction-free environments.',
      'Combining state-of-the-art 3D stage production and encrypted communications with holistic wellness, organic culinary menus, and team-building rally races leads to record engagement and actionable leadership breakthroughs.',
      'Our MICE division handles turnkey execution for international corporate summits, handling venue buyouts, delegate airlifts, VIP security, and immersive gala productions.'
    ],
    tags: ['MICE Events', 'Executive Retreats', 'Corporate Summits', 'Keynote Production']
  },
  {
    id: 'blog-6',
    title: 'The Art of European Butler Protocol in Asian Hospitality Standards',
    slug: 'art-of-european-butler-protocol',
    category: 'Hospitality Trends',
    readTime: '5 min read',
    date: 'June 05, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Global Celebrations Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Blending traditional European butler etiquette with the warm, intuitive grace of Asian hospitality to create unforgettable guest experiences.',
    content: [
      'Exceptional service is unobtrusive, predictive, and deeply empathetic. The modern luxury traveler expects their preferences—from room temperature and pillow selections to dietary requirements—to be anticipated seamlessly before they even speak.',
      'By training service staff in classic British and Swiss butler academies while preserving the warm, heartfelt spirit of oriental hospitality, Anahita sets new benchmarks in 5-star guest satisfaction ratings.',
      'The result is a elevated, home-away-from-home feeling where luxury hotel guests feel genuinely cared for and valued.'
    ],
    tags: ['Butler Service', 'Guest Experience', 'Hospitality Protocol', 'Excellence']
  }
];

