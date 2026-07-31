export type PageType = 'home' | 'about' | 'services' | 'real-estate' | 'weddings' | 'domestic-travel' | 'international-travel' | 'mice' | 'gallery' | 'contact';

export interface WeddingPackage {
  id: string;
  title: string;
  category: 'Royal Palace' | 'Beachfront Resort' | 'Heritage Fort' | 'International Riviera' | 'Intimate Sanctuary';
  location: string;
  guestCapacity: string;
  image: string;
  description: string;
  highlights: string[];
  startingPrice: string;
}

export interface TravelDestination {
  id: string;
  title: string;
  region: 'North India' | 'South India' | 'Western India' | 'Himalayas' | 'Europe' | 'Maldives & Asia' | 'Middle East' | 'Africa';
  isDomestic: boolean;
  type: 'Palace' | 'Luxury Train' | 'Island' | 'Safari' | 'Yacht' | 'Alpine Chalet' | 'Wellness';
  duration: string;
  image: string;
  description: string;
  itineraryHighlights: string[];
  exclusiveAccess: string;
}

export interface MiceService {
  id: string;
  type: 'Meetings' | 'Incentives' | 'Conferences' | 'Exhibitions' | 'Leadership Retreats';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  capacity: string;
  deliverables: string[];
  caseStudyMetric: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  category: 'Villa' | 'Resort' | 'Sanctuary' | 'Estate' | 'Lodge';
  rating: number;
  image: string;
  galleryImages: string[];
  description: string;
  keysCount: number;
  occupancyRate: string;
  roiIncrease: string;
  highlights: string[];
  architect: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  deliverables: string[];
  metric: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hotels' | 'Villas' | 'Weddings' | 'Events' | 'Travel';
  image: string;
  location: string;
  caption: string;
}

export interface GlobalOffice {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  image: string;
  coordinates: { x: number; y: number }; // Percentage positions for world map
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  property: string;
  image: string;
}
