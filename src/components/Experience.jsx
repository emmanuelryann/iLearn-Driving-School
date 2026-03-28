import '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="experience reveal">
      <div className="experience__overlay"></div>
      <div className="experience__inner container">
        <div className="experience__content">
          <h2 className="experience__title">
            We&apos;re Very Experienced &amp; 90% Students Pass Their Driving On First Try
          </h2>
          <p className="experience__text">
            Our proven teaching methods and experienced instructors ensure the highest 
            pass rates in the industry. We combine classroom theory with practical 
            on-road experience.
          </p>

          <div className="experience__stats">
            <div className="experience__stat">
              <span className="experience__stat-number">10+</span>
              <span className="experience__stat-label">Years Experience</span>
            </div>
            <div className="experience__stat">
              <span className="experience__stat-number">150+</span>
              <span className="experience__stat-label">Qualified Instructors</span>
            </div>
            <div className="experience__stat">
              <span className="experience__stat-number">5K+</span>
              <span className="experience__stat-label">Happy Students</span>
            </div>
          </div>
        </div>

        <div className="experience__play">
          <a href="#" className="experience__play-btn" aria-label="Play video">
            <i className="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
