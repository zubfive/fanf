import { notFound } from 'next/navigation';
import EventDetail from './event-detail';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

interface EventOption {
  title: string;
  description: string;
  features: string[];
  image?: string;
}

interface EventType {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  services: string[];
  organizationOptions: EventOption[];
}

const eventThemes: EventType[] = [
  {
    id: 1,
    name: 'Birthday',
    slug: 'birthday',
    image: '/images/events/birthday.png',
    description: 'Make their special day unforgettable with our stunning birthday flower arrangements. Perfect for any age and style.',
    services: [
      'Themed arrangements',
      'Birthday flower cakes',
      'Balloon and flower combos',
      'Same-day delivery available'
    ],
    organizationOptions: [
      {
        title: 'Basic Birthday Package',
        description: 'Simple yet elegant arrangements for a memorable birthday',
        features: [
          'Standard bouquet',
          'Birthday card',
          'Basic gift wrapping'
        ]
      },
      {
        title: 'Premium Birthday Package',
        description: 'Luxurious arrangements for an extraordinary celebration',
        features: [
          'Premium bouquet',
          'Chocolates or wine',
          'Luxury gift wrapping',
          'Personalized message'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Anniversary',
    slug: 'anniversary',
    image: '/images/events/anniversary.jpg',
    description: 'Celebrate love and togetherness with our romantic anniversary flower arrangements.',
    services: [
      'Romantic rose arrangements',
      'Elegant mixed bouquets',
      'Heart-shaped arrangements',
      'Luxury flower boxes',
      'Personalized messages'
    ],
    organizationOptions: [
      {
        title: 'Classic Anniversary',
        description: 'Timeless arrangements to celebrate your love',
        features: [
          'Rose bouquet',
          'Greeting card',
          'Standard delivery'
        ]
      },
      {
        title: 'Luxury Anniversary',
        description: 'Premium arrangements for a special celebration',
        features: [
          'Premium mixed bouquet',
          'Luxury packaging',
          'Priority delivery'
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Wedding',
    slug: 'wedding',
    image: '/images/events/wedding.jpg',
    description: 'Make your special day perfect with our exquisite wedding flower arrangements and decorations.',
    services: [
      'Bridal bouquets',
      'Boutonnieres & corsages',
      'Ceremony decorations',
      'Reception centerpieces',
      'Full wedding planning available'
    ],
    organizationOptions: [
      {
        title: 'Intimate Wedding Package',
        description: 'Beautiful arrangements for intimate weddings',
        features: [
          'Bridal bouquet',
          'Boutonnieres',
          'Simple ceremony decor',
          'Basic centerpieces'
        ]
      },
      {
        title: 'Grand Wedding Package',
        description: 'Luxurious floral designs for your dream wedding',
        features: [
          'Premium bridal bouquet',
          'Full bridal party flowers',
          'Elaborate ceremony decor',
          'Luxury centerpieces',
          'Venue consultation'
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Diwali',
    slug: 'diwali',
    image: '/images/events/diwali.png',
    description: 'Celebrate the festival of lights with our beautiful Diwali flower arrangements and decorations.',
    services: [
      'Diwali floral torans',
      'Rangoli flower petals',
      'Diyas and flower arrangements',
      'Pooja thali decorations'
    ],
    organizationOptions: [
      {
        title: 'Basic Diwali Package',
        description: 'Traditional floral decorations for a festive home',
        features: [
          'Floral toran',
          'Rangoli flower petals',
          'Basic diya decoration'
        ]
      },
      {
        title: 'Premium Diwali Package',
        description: 'Luxury decorations for a grand Diwali celebration',
        features: [
          'Premium floral toran',
          'Intricate rangoli design',
          'Decorative diya arrangement',
          'Pooja thali decoration'
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Celebration',
    slug: 'celebration',
    image: '/images/events/celebration.png',
    description: 'Perfect floral arrangements for any celebration or special occasion.',
    services: [
      'Custom bouquets',
      'Themed arrangements',
      'Balloon and flower combos',
      'Same-day delivery available'
    ],
    organizationOptions: [
      {
        title: 'Standard Celebration',
        description: 'Beautiful flowers for any celebration',
        features: [
          'Medium bouquet',
          'Greeting card',
          'Standard wrapping'
        ]
      },
      {
        title: 'Deluxe Celebration',
        description: 'Premium arrangements for special moments',
        features: [
          'Large premium bouquet',
          'Luxury gift wrapping',
          'Chocolates or wine',
          'Priority delivery'
        ]
      }
    ]
  }
];

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const event = eventThemes.find(e => e.slug === resolvedParams.slug);
  
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: `Event - ${event.name}`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const event = eventThemes.find(e => e.slug === resolvedParams.slug);
  
  if (!event) {
    notFound();
  }

  return <EventDetail event={event} />;
}

export async function generateStaticParams() {
  return eventThemes.map((event) => ({
    slug: event.slug,
  }));
}