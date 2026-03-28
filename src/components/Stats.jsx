import '../styles/Stats.css';

const stats = [
  { icon: 'fa-solid fa-user-graduate', count: '15,000+', label: 'Students' },
  { icon: 'fa-solid fa-chalkboard-user', count: '1,200+', label: 'Classes' },
  { icon: 'fa-solid fa-code-branch', count: '50+', label: 'Branches' },
  { icon: 'fa-solid fa-earth-americas', count: '20+', label: 'Countries' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner container">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <i className={stat.icon}></i>
            <div className="stats__text">
              <span className="stats__count">{stat.count}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
