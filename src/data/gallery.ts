export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Wedding Collection' | 'Seasonal Collection' | 'Gift Arrangements' | 'Event Decorations' | 'Flower Bouquets';
}

export const galleryData: GalleryImage[] = [
  // Wedding Collection
  { id: 'w1', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop', alt: 'Wedding Centerpiece', category: 'Wedding Collection' },
  { id: 'w2', src: '/images/wedding_arch.png', alt: 'Wedding Arch', category: 'Wedding Collection' },
  { id: 'w3', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop', alt: 'Bridal Bouquet', category: 'Wedding Collection' },
  
  // Seasonal Collection
  { id: 's1', src: 'https://images.unsplash.com/photo-1558234850-59fdb60c388d?q=80&w=1200&auto=format&fit=crop', alt: 'Spring Pastels', category: 'Seasonal Collection' },
  { id: 's2', src: 'https://images.unsplash.com/photo-1502123594248-cb57eb6a6039?q=80&w=1200&auto=format&fit=crop', alt: 'Summer Sunflowers', category: 'Seasonal Collection' },
  { id: 's3', src: 'https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=1200&auto=format&fit=crop', alt: 'Autumn Warmth', category: 'Seasonal Collection' },
  
  // Gift Arrangements
  { id: 'g1', src: '/images/blush_arrangement.png', alt: 'Blush Gift Box', category: 'Gift Arrangements' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop', alt: 'Luxury Anniversary Gift', category: 'Gift Arrangements' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1582791694776-081498b248eb?q=80&w=1200&auto=format&fit=crop', alt: 'Romantic Red Roses', category: 'Gift Arrangements' },
  
  // Event Decorations
  { id: 'e1', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop', alt: 'Gala Floral Display', category: 'Event Decorations' },
  { id: 'e2', src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1200&auto=format&fit=crop', alt: 'Corporate Event Florals', category: 'Event Decorations' },
  { id: 'e3', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop', alt: 'Party Centerpieces', category: 'Event Decorations' },
  
  // Flower Bouquets
  { id: 'b1', src: 'https://images.unsplash.com/photo-1596431940984-7a316c1482f3?q=80&w=1200&auto=format&fit=crop', alt: 'Sage & White Mix', category: 'Flower Bouquets' },
  { id: 'b2', src: 'https://images.unsplash.com/photo-1542458542-019d4b00caae?q=80&w=1200&auto=format&fit=crop', alt: 'Wildflower Bouquet', category: 'Flower Bouquets' },
  { id: 'b3', src: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=1200&auto=format&fit=crop', alt: 'Classic Pink Peonies', category: 'Flower Bouquets' }
];
