import '../styles/Instructors.css';

const instructors = [
  {
    image: 'https://media.istockphoto.com/id/2214889528/photo/smiling-businessman-walking-in-the-office-holding-a-laptop.jpg?s=1024x1024&w=is&k=20&c=sq4nDRtIgJ93pjYY7Vh_umgxFWUH1vJyvYA-cJwb0v4=',
    name: 'Paul Kweku',
    title: 'Senior Instructor',
  },
  {
    image: 'https://images.pexels.com/photos/5060805/pexels-photo-5060805.jpeg',
    name: 'Angelo Kwesi',
    title: 'Lead Instructor',
  },
  {
    image: 'https://images.pexels.com/photos/33091826/pexels-photo-33091826.jpeg',
    name: 'Blessing Mensah',
    title: 'Driving Coach',
  },
];

export default function Instructors() {
  return (
    <section className="instructors reveal" id="instructors">
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
