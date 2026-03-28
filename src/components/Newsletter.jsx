import { useState } from 'react';
import '../styles/Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter__overlay"></div>
      <div className="newsletter__inner container">
        <h2 className="newsletter__title">
          Sign Up to get updates &amp; news about us
        </h2>
        <p className="newsletter__text">
          Subscribe to our newsletter and stay updated with the latest driving tips,
          course updates, and special offers.
        </p>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter__input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter__btn">
            Subscribe <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
