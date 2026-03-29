import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner container">
        <div className="about__image-wrapper">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepYga3mtfsPOJ-_rnruvNxqLYDb7yViH_E4bvzRkjrKUM1AK-25fZrf6lfem7mafcIu9R2HPKlA-xeYbUiztaFdJ2uuIzNK7uYObH-J6W2q94vs6vP0Bt8yAoPgaAWN1PsqjIQV=s1360-w1360-h1020-rw"
            alt="Driving lesson in progress"
            className="about__image"
          />
          <div className="about__badge">
            <span className="about__badge-number">10+</span>
            <span className="about__badge-text">Years Experience</span>
          </div>
        </div>

        <div className="about__content">
          <p className="about__label">About Us</p>
          <h2 className="about__title">
            Best Driving School In Ghana
          </h2>
          <p className="about__text">
            We offer comprehensive driving courses tailored for every skill level. 
            Our experienced instructors use the latest techniques to ensure you become 
            a safe, confident driver. Join thousands of successful students who have 
            passed their tests with us.
          </p>

          <div className="about__checks">
            <div className="about__check-item">
              <i className="fa-solid fa-circle-check"></i>
              <span>We are certified</span>
            </div>
            <div className="about__check-item">
              <i className="fa-solid fa-circle-check"></i>
              <span>Best record</span>
            </div>
          </div>

          <a href="#courses" className="about__btn">Discover More</a>
        </div>
      </div>
    </section>
  );
}
