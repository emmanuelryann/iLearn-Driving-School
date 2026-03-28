import '../styles/Stats.css';

const stats = [
  { icon: 'fa-solid fa-user-graduate', count: '5,000+', label: 'Students' },
  { icon: 'fa-solid fa-chalkboard-user', count: '150+', label: 'Instructors' },
  { icon: 'fa-solid fa-code-branch', count: '5+', label: 'Branches' },
  { icon: 'fa-solid fa-earth-americas', count: '3+', label: 'Countries' },
];

export default function Stats() {
  return (
    <section className="stats reveal">
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
