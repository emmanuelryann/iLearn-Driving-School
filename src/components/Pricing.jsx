import '../styles/Pricing.css';

const packages = [
  {
    name: 'Basic Package',
    price: '75',
    features: [
      '10 Driving Lessons',
      'Classroom Theory Sessions',
      'Practice Test Access',
      'Basic Road Safety Guide',
      'Email Support',
    ],
    highlighted: false,
  },
  {
    name: 'Standard Package',
    price: '95',
    features: [
      '20 Driving Lessons',
      'Advanced Theory Sessions',
      'Unlimited Practice Tests',
      'Defensive Driving Module',
      'Priority Support',
      'Mock Road Test',
    ],
    highlighted: true,
  },
  {
    name: 'Executive Package',
    price: '125',
    features: [
      '30 Driving Lessons',
      'Full Theory Curriculum',
      'Unlimited Practice Tests',
      'All Driving Modules',
      '24/7 Premium Support',
      'Guaranteed Pass or Free Retry',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing reveal" id="pricing">
      <div className="pricing__inner container">
        <p className="pricing__label">Choose Your Plan</p>
        <h2 className="pricing__heading">Our Most Valuable Pricing Packages</h2>

        <div className="pricing__grid">
          {packages.map((pkg) => (
            <div
              className={`pricing__card${pkg.highlighted ? ' pricing__card--highlighted' : ''}`}
              key={pkg.name}
            >
              <p className="pricing__card-name">{pkg.name}</p>
              <div className="pricing__card-price">
                <span className="pricing__currency">$</span>
                <span className="pricing__amount">{pkg.price}</span>
                <span className="pricing__period">/month</span>
              </div>
              <ul className="pricing__features">
                {pkg.features.map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`pricing__btn${pkg.highlighted ? ' pricing__btn--filled' : ''}`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
