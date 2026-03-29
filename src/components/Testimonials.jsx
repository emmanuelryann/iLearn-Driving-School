import '../styles/Testimonials.css';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D',
    text: 'The instructors were incredibly patient and professional. I passed my driving test on the first attempt thanks to the comprehensive training I received here.',
    name: 'John Banks',
    role: 'Student',
    rating: 5,
  },
  {
    image: 'https://images.pexels.com/photos/4531837/pexels-photo-4531837.jpeg',
    text: 'Best driving school in the area! The defensive driving course gave me so much confidence on the road. I highly recommend their programs to everyone.',
    name: 'Sarah Williams',
    role: 'Graduate',
    rating: 5,
  },
  {
    image: 'https://images.pexels.com/photos/7109089/pexels-photo-7109089.jpeg',
    text: 'Flexible scheduling and affordable packages made learning to drive stress-free. The modern vehicles and up-to-date curriculum were a huge plus.',
    name: 'Michael David',
    role: 'Student',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner container">
        <p className="testimonials__label">Testimonials</p>
        <h2 className="testimonials__title">What Students Are Saying</h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonials__card" key={t.name}>
              <div className="testimonials__card-header">
                <img src={t.image} alt={t.name} className="testimonials__avatar" />
                <div className="testimonials__card-info">
                  <h4 className="testimonials__card-name">{t.name}</h4>
                  <p className="testimonials__card-role">{t.role}</p>
                </div>
                <i className="fa-solid fa-quote-right testimonials__quote-icon"></i>
              </div>
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }, (_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
              <p className="testimonials__card-text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
