import '../styles/Services.css';

const services = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Defensive Training',
    text: 'Learn how to anticipate and avoid dangerous situations while driving with our comprehensive defensive driving program.',
  },
  {
    icon: 'fa-solid fa-car',
    title: 'Private Lessons',
    text: 'One-on-one personalized driving lessons tailored to your skill level and learning pace with certified instructors.',
  },
  {
    icon: 'fa-solid fa-road',
    title: 'Road Test Prep',
    text: 'Get fully prepared for your road test with mock exams, tips, and expert guidance to ensure you pass on your first attempt.',
  },
];

export default function Services() {
  return (
    <section className="services reveal" id="services">
      <div className="services__inner container">
        <p className="services__label">What We Offer</p>
        <h2 className="services__title">We Provide Service For You</h2>

        <div className="services__grid">
          {services.map((svc) => (
            <div className="services__card" key={svc.title}>
              <div className="services__icon-wrap">
                <i className={svc.icon}></i>
              </div>
              <h3 className="services__card-title">{svc.title}</h3>
              <p className="services__card-text">{svc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
