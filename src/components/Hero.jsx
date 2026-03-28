import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>
      <div className="hero__content container">
        <p className="hero__subtitle">Welcome to iLearn Driving School</p>
        <h1 className="hero__title">
          Learn to Drive<br />with Confidence
        </h1>
        <p className="hero__text">
          Get behind the wheel with expert instructors who guide you every step of the way. 
          Build your skills, boost your confidence, and pass your driving test on the first try.
        </p>
        <a href="#courses" className="hero__btn">Explore Courses</a>
      </div>

      <div className="hero__search container">
        <div className="hero__search-bar">
          <div className="hero__search-group">
            <label className="hero__search-label">Course Type</label>
            <select className="hero__search-select">
              <option>Select Course</option>
              <option>Beginner</option>
              <option>Advanced</option>
              <option>Defensive</option>
            </select>
          </div>
          <div className="hero__search-group">
            <label className="hero__search-label">Location</label>
            <select className="hero__search-select">
              <option>Select Location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>
          <div className="hero__search-group">
            <label className="hero__search-label">Date</label>
            <input type="date" className="hero__search-input" />
          </div>
          <button className="hero__search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
