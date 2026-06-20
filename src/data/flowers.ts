export interface Flower {
  id: string;
  name: string;
  category: 'Roses' | 'Tulips' | 'Lilies' | 'Sunflowers' | 'Mixed Bouquets';
  shortDescription: string;
  longDescription: string;
  meaning: string;
  availableColors: string[];
  heroImage: string;
  gallery: string[];
}

export const flowers: Flower[] = [
  {
    id: 'classic-red-roses',
    name: 'Classic Red Roses',
    category: 'Roses',
    shortDescription: 'Classic, romantic, and timeless symbols of love.',
    longDescription: 'Our signature Classic Red Roses arrangement features 24 long-stemmed, velvety red roses carefully selected for their deep color and flawless bloom. Hand-tied and wrapped in our premium signature paper, this bouquet is the ultimate expression of romance.',
    meaning: 'Love, Passion, and Deep Respect.',
    availableColors: ['Deep Red', 'Blush Pink', 'Ivory White'],
    heroImage: '/images/classic_roses.png',
    gallery: [
      '/images/classic_roses.png',
      '/images/anniversary_florals.png'
    ]
  },
  {
    id: 'spring-tulip-medley',
    name: 'Spring Tulip Medley',
    category: 'Tulips',
    shortDescription: 'Vibrant and elegant, perfect for brightening any day.',
    longDescription: 'Bring the joy of spring indoors with our vibrant Tulip Medley. Sourced from the finest local growers, these crisp, elegant blooms continue to grow even after being cut, providing a dynamic and ever-changing display of natural beauty.',
    meaning: 'Perfect Love, Rebirth, and Charity.',
    availableColors: ['Soft Pink', 'Sunny Yellow', 'Crisp White', 'Lavender'],
    heroImage: '/images/tulip_medley.png',
    gallery: [
      '/images/tulip_medley.png',
      '/images/sympathy_florals.png'
    ]
  },
  {
    id: 'casablanca-lilies',
    name: 'Casablanca Lilies',
    category: 'Lilies',
    shortDescription: 'Sophisticated and fragrant blooms for a touch of luxury.',
    longDescription: 'Known for their breathtaking size and intoxicating fragrance, our Casablanca Lilies are the epitome of elegance. Arranged with minimal greenery to let their star-shaped blooms take center stage, they transform any room into a luxurious sanctuary.',
    meaning: 'Purity, Majesty, and Honor.',
    availableColors: ['Pure White', 'Stargazer Pink'],
    heroImage: '/images/enchanted_reception.jpg',
    gallery: [
      '/images/enchanted_reception.jpg',
      '/images/wedding_arch.png'
    ]
  },
  {
    id: 'golden-sunflowers',
    name: 'Golden Sunflowers',
    category: 'Sunflowers',
    shortDescription: 'Radiant and joyful, bringing warmth and happiness.',
    longDescription: 'Capture the essence of summer with our bold, brilliant sunflowers. Their large, golden faces naturally turn toward the light, making them a perfect gift to uplift spirits, celebrate achievements, or simply bring a burst of sunshine indoors.',
    meaning: 'Adoration, Loyalty, and Longevity.',
    availableColors: ['Golden Yellow'],
    heroImage: '/images/golden_sunflowers.png',
    gallery: [
      '/images/golden_sunflowers.png',
      '/images/tulip_medley.png'
    ]
  },
  {
    id: 'fleuria-signature-mix',
    name: 'Fleuria Signature Mix',
    category: 'Mixed Bouquets',
    shortDescription: 'Artfully arranged assortments for every unique occasion.',
    longDescription: 'Our master florists combine seasonal favorites—such as ranunculus, peonies, and wild eucalyptus—into a lush, textured masterpiece. Each Signature Mix is uniquely crafted, ensuring no two arrangements are exactly alike, perfect for life\'s unpredictable moments.',
    meaning: 'Harmony, Creativity, and Abundance.',
    availableColors: ['Blush & Gold', 'Pastel Dream', 'Vibrant Sunset'],
    heroImage: '/images/blush_arrangement.png',
    gallery: [
      '/images/blush_arrangement.png',
      '/images/anniversary_florals.png'
    ]
  }
];
