import './AboutPage.css';

const teamMembers = [
  {
    id: 1,
    name: 'Isabella Laurent',
    role: 'Lead Floral Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Julian Hayes',
    role: 'Botanical Specialist',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Amelia Chen',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p className="mission-statement">"Creating unforgettable moments through flowers."</p>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-text">
            <h2>The Inspiration Behind Fleuria</h2>
            <p>
              Born from a lifelong passion for botanical beauty, Fleuria was established with a singular vision: to elevate the art of floral design into a luxury experience. We believe that flowers are more than just decorations; they are the living, breathing language of emotion.
            </p>
            <p>
              Every stem we select is hand-picked from the world's most pristine gardens. Our arrangements are meticulously crafted to not only capture the eye but to evoke a sense of deep, romantic tranquility. Fleuria is the culmination of nature's finest work and human artistry.
            </p>
          </div>
          <div className="story-image-container">
            <img 
              src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop" 
              alt="Florist arranging flowers" 
              className="story-image"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <div className="team-header">
          <h2>Meet Our Florists</h2>
          <p>The artisans behind every Fleuria creation.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
