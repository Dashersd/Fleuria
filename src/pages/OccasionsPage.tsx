import { useEffect, useRef } from 'react';
import { occasionsData } from '../data/occasions';
import './OccasionsPage.css';

const OccasionsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.occasion-page-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="occasions-page">
      <header className="occasions-header">
        <h1>Life's Special Moments</h1>
        <p>Explore recommended floral arrangements perfectly tailored for every occasion.</p>
      </header>

      <div className="occasions-page-grid" ref={containerRef}>
        {occasionsData.map((occ, index) => (
          <div 
            key={occ.id} 
            className="occasion-page-card fade-up-hidden"
            style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
          >
            <div className="occ-card-image">
              <img src={occ.image} alt={occ.title} loading="lazy" />
            </div>
            <div className="occ-card-content">
              <h2>{occ.title}</h2>
              <p>{occ.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionsPage;
