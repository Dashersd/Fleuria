
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Eleanor Vance",
    text: "Fleuria provided the most breathtaking roses for our anniversary. The quality and presentation were unmatched.",
    role: "Happy Customer"
  },
  {
    id: 2,
    name: "Michael Sterling",
    text: "The signature mixed bouquet was a masterpiece. Their attention to detail and customer service is truly premium.",
    role: "Event Planner"
  },
  {
    id: 3,
    name: "Sophia Rossi",
    text: "Absolutely stunning arrangements. The lilies lasted for weeks and filled my home with the most beautiful fragrance.",
    role: "Interior Designer"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-header">
        <h2 className="section-title">Client Love</h2>
        <p className="section-subtitle">Stories from our cherished customers</p>
      </div>

      <div className="testimonials-carousel-container">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={1000}
          className="testimonials-swiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
