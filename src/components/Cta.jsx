import '../styles/Cta.css';

export default function Cta() {
  return (
    <section className="cta reveal" id="contact">
      <div className="cta__overlay"></div>
      <div className="cta__inner container">
        <div className="cta__badge">
          <i className="fa-solid fa-headset"></i>
        </div>
        <h2 className="cta__title">
          Start Learning to Drive Today<br />Connect Now!
        </h2>
        <p className="cta__text">
          Ready to start your driving journey? Get in touch with us today and
          take the first step towards getting your license. Our team is here to
          help you every step of the way.
        </p>
        <div className="cta__actions">
          <a href="tel:+15551234567" className="cta__btn cta__btn--primary">
            <i className="fa-solid fa-phone"></i> Call Us Now
          </a>
          <a href="#courses" className="cta__btn cta__btn--outline">
            View Courses
          </a>
        </div>
      </div>
    </section>
  );
}
