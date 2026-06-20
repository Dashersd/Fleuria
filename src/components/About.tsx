import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="/images/floral_arch_outdoor.jpg" 
            alt="Fleuria Boutique" 
          />
        </div>
        <div className="about-content">
          <h2 className="section-title">Our Story</h2>
          <p className="about-text">
            Fleuria was born out of a profound love for the fleeting beauty of nature. We believe that every petal tells a story, and our passion is to weave those stories into breathtaking arrangements that speak directly to the heart.
          </p>
          <p className="about-text">
            From locally sourced, sustainable blooms to our intricate, handcrafted designs, every element of Fleuria is designed with intention. Our mission is to elevate your everyday moments and make your grandest celebrations truly unforgettable.
          </p>
          <div className="about-signature">
            - The Fleuria Family
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
