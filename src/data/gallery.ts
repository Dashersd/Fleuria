export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Wedding Collection' | 'Seasonal Collection' | 'Gift Arrangements' | 'Event Decorations' | 'Flower Bouquets';
}

export const galleryData: GalleryImage[] = [
  // Wedding Collection
  { id: 'w1', src: '/images/anniversary_flowers.png', alt: 'Wedding Centerpiece', category: 'Wedding Collection' },
  { id: 'w2', src: '/images/wedding_arch.png', alt: 'Wedding Arch', category: 'Wedding Collection' },
  { id: 'w3', src: '/images/classic_roses.png', alt: 'Bridal Bouquet', category: 'Wedding Collection' },
  
  // Seasonal Collection
  { id: 's1', src: '/images/floral_arch_outdoor.jpg', alt: 'Spring Pastels', category: 'Seasonal Collection' },
  { id: 's2', src: '/images/floral_arch_lanterns.jpg', alt: 'Summer Sunflowers', category: 'Seasonal Collection' },
  { id: 's3', src: '/images/golden_sunflowers.png', alt: 'Autumn Warmth', category: 'Seasonal Collection' },
  
  // Gift Arrangements
  { id: 'g1', src: '/images/blush_arrangement.png', alt: 'Blush Gift Box', category: 'Gift Arrangements' },
  { id: 'g2', src: '/images/anniversary_florals.png', alt: 'Luxury Anniversary Gift', category: 'Gift Arrangements' },
  { id: 'g3', src: '/images/valentines_flowers.png', alt: 'Romantic Red Roses', category: 'Gift Arrangements' },
  
  // Event Decorations
  { id: 'e1', src: '/images/event_hall.jpg', alt: 'Gala Floral Display', category: 'Event Decorations' },
  { id: 'e2', src: '/images/nighttime_wedding_arch.jpg', alt: 'Evening Event Setup', category: 'Event Decorations' },
  { id: 'e3', src: '/images/enchanted_reception.jpg', alt: 'Enchanted Reception Setup', category: 'Event Decorations' },
  
  // Flower Bouquets
  { id: 'b1', src: '/images/sage_white_mix.jpg', alt: 'Sage & White Mix', category: 'Flower Bouquets' },
  { id: 'b2', src: '/images/wildflower_bouquet.jpg', alt: 'Wildflower Bouquet', category: 'Flower Bouquets' },
  { id: 'b3', src: '/images/birthday_flowers.png', alt: 'Classic Pink Peonies', category: 'Flower Bouquets' }
];
