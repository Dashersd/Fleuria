import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

// Import CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import './GalleryPage.css';

import { galleryData } from '../data/gallery';

const categories = ['All', 'Wedding Collection', 'Seasonal Collection', 'Gift Arrangements', 'Event Decorations', 'Flower Bouquets'];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter gallery data based on category
  const filteredGallery = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === activeCategory);

  // Carousel data (usually best of the best, let's just use a slice or all)
  const carouselImages = galleryData.slice(0, 6);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Fleuria Portfolio</h1>
        <p>Immerse yourself in our finest floral creations.</p>
      </header>

      {/* Coverflow Carousel */}
      <section className="gallery-carousel-section">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {carouselImages.map((img, idx) => (
            <SwiperSlide key={`carousel-${img.id}`} onClick={() => openLightbox(idx)}>
              <img src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Gallery Grid with Categories */}
      <section className="gallery-grid-section">
        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-page-grid">
          {filteredGallery.map((img) => {
            // Find the global index for the lightbox
            const globalIndex = galleryData.findIndex(item => item.id === img.id);
            return (
              <div 
                key={img.id} 
                className="gallery-page-item"
                onClick={() => openLightbox(globalIndex)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span>View Details</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={galleryData.map(img => ({ src: img.src, alt: img.alt }))}
        plugins={[Zoom, Thumbnails]}
        animation={{ fade: 300 }}
      />
    </div>
  );
};

export default GalleryPage;
