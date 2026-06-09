import { useParams, Link } from 'react-router-dom';
import { flowers } from '../data/flowers';
import './FlowerDetailsPage.css';

const FlowerDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const flower = flowers.find(f => f.id === id);

  if (!flower) {
    return (
      <div className="flower-details-error">
        <h2>Flower not found.</h2>
        <Link to="/collections">Return to Collections</Link>
      </div>
    );
  }

  return (
    <div className="flower-details-page">
      <div className="details-hero">
        <img src={flower.heroImage} alt={flower.name} className="details-hero-img" />
        <div className="details-hero-overlay"></div>
        <div className="details-hero-content">
          <h1>{flower.name}</h1>
          <p>{flower.category}</p>
        </div>
      </div>

      <div className="details-container">
        <div className="details-main">
          <section className="details-section">
            <h2>The Details</h2>
            <p className="details-long-desc">{flower.longDescription}</p>
          </section>

          <section className="details-section">
            <h2>Flower Meaning</h2>
            <p className="details-meaning">"{flower.meaning}"</p>
          </section>

          <section className="details-section">
            <h2>Available Colors</h2>
            <ul className="colors-list">
              {flower.availableColors.map((color, idx) => (
                <li key={idx}><span className="color-dot"></span>{color}</li>
              ))}
            </ul>
          </section>

          <div className="details-action">
            <Link to="/contact" className="details-request-btn">Request Arrangement</Link>
          </div>
        </div>

        <div className="details-sidebar">
          <h3>Floral Gallery</h3>
          <div className="details-mini-gallery">
            {flower.gallery.map((img, idx) => (
              <img key={idx} src={img} alt={`${flower.name} angle ${idx + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetailsPage;
