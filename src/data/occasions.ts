export interface Occasion {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const occasionsData: Occasion[] = [
  {
    id: 'birthday',
    title: 'Birthday',
    description: 'Celebrate another year of life with bright, joyful, and vibrant bouquets designed to make them smile.',
    image: '/images/birthday_flowers.png'
  },
  {
    id: 'anniversary',
    title: 'Anniversary',
    description: 'Honor your timeless love with our romantic, deep red roses and elegant blush peonies.',
    image: '/images/anniversary_flowers.png'
  },
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Breathtaking bridal bouquets, centerpieces, and floral arches customized for your special day.',
    image: '/images/wedding_arch.png'
  },
  {
    id: 'graduation',
    title: 'Graduation',
    description: 'Congratulate their achievements with bold sunflowers and proud mixed arrangements.',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'valentines-day',
    title: 'Valentine\'s Day',
    description: 'Express your deepest affections with our exclusive Valentine\'s collection of premium roses.',
    image: '/images/valentines_flowers.png'
  },
  {
    id: 'mothers-day',
    title: 'Mother\'s Day',
    description: 'Show appreciation for the mother figure in your life with soft, elegant, and fragrant pastels.',
    image: '/images/blush_arrangement.png'
  },
  {
    id: 'sympathy',
    title: 'Sympathy',
    description: 'Offer comfort and convey your deepest condolences with serene, calming white lilies.',
    image: '/images/sympathy_flowers.png'
  }
];
