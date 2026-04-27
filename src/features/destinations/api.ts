import api from '../../lib/api.client';

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
  createdAt: string;
}

const MOCK_DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: 'Gheralta Mountains',
    description: 'Explore the spectacular red-rock mountains of Gheralta, famous for their steep cliffs and ancient rock-hewn churches carved deep into the stone, offering breathtaking views of the Tigray region.',
    image: '/images/destinations/gheralta.jpg',
    location: 'Tigray Region',
    category: 'Nature & History',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Fasil Ghebbi, Gondar',
    description: 'Walk through the royal enclosure of Fasil Ghebbi, a fortress city that served as the home of Ethiopia\'s emperors in the 17th and 18th centuries. Known as the "Camelot of Africa," it features stunning medieval castles.',
    image: '/images/destinations/Gonder castle.jpg',
    location: 'Gondar, Amhara Region',
    category: 'Historical',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'The Obelisk of Axum',
    description: 'Stand before the towering Obelisk of Axum, an ancient stela carved from a single piece of granite. This UNESCO World Heritage site is a testament to the engineering brilliance of the Aksumite Empire.',
    image: '/images/destinations/axum.jpg',
    location: 'Axum, Tigray Region',
    category: 'Historical',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Danakil Depression',
    description: 'Witness the otherworldly volcanic landscape of Dallol in the Danakil Depression. Featuring surreal neon green lakes, bubbling sulfur springs, and active volcanoes, it is one of the hottest and lowest places on Earth.',
    image: '/images/destinations/Danakil.jpg',
    location: 'Afar Region',
    category: 'Adventure',
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Rock-Hewn Churches of Lalibela',
    description: 'Discover the legendary Church of Saint George (Bete Giyorgis), one of eleven monolithic churches carved directly downwards into the volcanic bedrock in the 12th century, known as the "New Jerusalem".',
    image: '/images/destinations/lalibela.jpg',
    location: 'Lalibela, Amhara Region',
    category: 'Historical & Religious',
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Blue Nile Falls (Tis Abay)',
    description: 'Witness the awesome power of the Blue Nile Falls, locally known as Tis Abay or "Smoking Water," rushing down majestically near Bahir Dar before plunging into the gorge below.',
    image: '/images/destinations/bluenile.jpg',
    location: 'Bahir Dar, Amhara Region',
    category: 'Nature & Landscape',
    createdAt: new Date().toISOString()
  }
];

export const fetchDestinations = async (): Promise<Destination[]> => {
  try {
    const response = await api.get('/destinations');
    return response.data.data.destinations;
  } catch (error) {
    console.warn('Failed to fetch from API, using mock data:', error);
    return MOCK_DESTINATIONS;
  }
};

export const fetchDestinationById = async (id: string): Promise<Destination> => {
  try {
    const response = await api.get(`/destinations/${id}`);
    return response.data.data.destination;
  } catch (error) {
    console.warn(`Failed to fetch destination ${id} from API, using mock data:`, error);
    const mock = MOCK_DESTINATIONS.find(d => d.id === id);
    if (!mock) throw error;
    return mock;
  }
};

