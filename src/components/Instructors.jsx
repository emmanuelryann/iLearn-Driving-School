import '../styles/Instructors.css';

const instructors = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
    name: 'Paul Marton',
    title: 'Senior Instructor',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
    name: 'Alpha Lubis',
    title: 'Lead Instructor',
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
    name: 'Mark Chris',
    title: 'Driving Coach',
  },
];

export default function Instructors() {
  return (
    <section className="instructors" id="instructors">
      <div className="instructors__inner container">
        <p className="instructors__label">Our Team</p>
        <h2 className="instructors__title">Meet Our Qualified Instructors</h2>

        <div className="instructors__grid">
          {instructors.map((inst) => (
            <div className="instructors__card" key={inst.name}>
              <div className="instructors__card-img-wrap">
                <img src={inst.image} alt={inst.name} className="instructors__card-img" />
              </div>
              <div className="instructors__card-body">
                <h3 className="instructors__card-name">{inst.name}</h3>
                <p className="instructors__card-title">{inst.title}</p>
                <div className="instructors__card-socials">
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
