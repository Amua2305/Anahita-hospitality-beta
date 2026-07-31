import { Property, ServiceItem, TeamMember, GalleryItem, GlobalOffice, Testimonial, WeddingPackage, TravelDestination, MiceService } from '../types';

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
    subtitle: 'Luxury India Heritage Tours & Expeditions',
    description: 'Experience India’s finest heritage through Maharajas’ Express train journeys, royal Rajasthan fort stays, Himalayan wellness retreats, and Kerala backwater houseboat cruises.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000',
    deliverables: [
      'Maharajas’ Express Luxury Train Charters',
      'Royal Fort & Palace Heritage Suites',
      'Himalayan Ayurvedic Wellness Retreats',
      'Private Helicopter & Luxury Chauffeur Escorts'
    ],
    metric: 'VIP Heritage Access Across India'
  },
  {
    id: 'srv-3',
    title: 'International Travel',
    subtitle: 'Outbound Global Luxury Holidays & Charters',
    description: 'Curated international holidays featuring private overwater island retreats in Maldives, Amalfi Coast superyachts, Kyoto zen tea sanctuaries, and Courchevel Alpine chalets.',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000',
    deliverables: [
      'Private Jet & Seaplane Chartering',
      'Exclusive Villa & Superyacht Buyouts',
      'After-Hours VIP Access to Global Landmarks',
      '24/7 Dedicated Personal Concierge'
    ],
    metric: 'Bespoke Global Travel Tailored to You'
  },
  {
    id: 'srv-4',
    title: 'MICE & Corporate Events',
    subtitle: 'Meetings, Incentives, Conferences & Exhibitions (MICEpro Standard)',
    description: 'Turnkey management for high-security C-suite board meetings, employee incentive retreats, global corporate conventions, and high-impact product launches.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    deliverables: [
      'C-Suite Board Summits & Leadership Escapes',
      'Top Performer Incentive Journeys',
      'Global Keynote Conventions & Stage Tech',
      'Luxury Product Expos & Launch Galas'
    ],
    metric: 'Flawless Execution for Global Corporates'
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
  {
    id: 'gal-1',
    title: 'Azure Lagoon Villas at Twilight',
    category: 'Hotels',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQFzCUXI4JjWjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664351128180?e=2147483647&v=beta&t=yy2Q-l-0996_ECbJei266e18lF2mjZ4oEN0p-ldu7nQ',
    location: 'North Malé Atoll, Maldives',
    caption: 'Bespoke overwater villa curation with solar glass tiles and infinity pool.'
  },
  {
    id: 'gal-2',
    title: 'Historic Lemon Terrace Gala',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    location: 'Positano, Italy',
    caption: 'An intimate sunset wedding celebration for 120 VIP guests overlooking the sea.'
  },
  {
    id: 'gal-3',
    title: 'Kyoto Zen Tea Garden Suite',
    category: 'Villas',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000',
    location: 'Kyoto, Japan',
    caption: 'Traditional Sukiya timber craftsmanship bathed in gentle morning light.'
  },
  {
    id: 'gal-4',
    title: 'Courchevel Alpine Fireside Lounge',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000',
    location: 'French Alps',
    caption: 'Exclusive winter tasting menu curated by a 3-Michelin starred guest chef.'
  },
  {
    id: 'gal-5',
    title: 'Private Yacht Charter Excursion',
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1000',
    location: 'Amalfi Coast, Italy',
    caption: 'Tailored luxury sea voyage along hidden sea caverns and coastal villages.'
  },
  {
    id: 'gal-6',
    title: 'The Palm Estate Infinity Pool',
    category: 'Villas',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000',
    location: 'Dubai, UAE',
    caption: 'Custom 50-meter temperature controlled pool with sunken fire pit lounge.'
  },
  {
    id: 'gal-7',
    title: 'Bespoke Culinary Pairing Experience',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000',
    location: 'Mayfair, London',
    caption: 'Private wine tasting led by Master Sommelier with rare vintage vintages.'
  },
  {
    id: 'gal-8',
    title: 'Boutique Sanctuary Reception Lounge',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
    location: 'Singapore',
    caption: 'A sensory arrival space featuring living botanical walls and bespoke scent design.'
  }
];

export const GLOBAL_OFFICES: GlobalOffice[] = [
  {
    city: 'Delhi NCR',
    country: 'India (Headquarters)',
    address: 'B-88, Sector-2, Noida, Uttar Pradesh 201301',
    phone: '+91 73039 07800',
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

