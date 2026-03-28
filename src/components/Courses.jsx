import '../styles/Courses.css';

const courses = [
  {
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80',
    category: 'Beginner',
    price: '$120',
    title: 'Beginner Driving Course',
    lessons: '12 Lessons',
    duration: '4 Weeks',
  },
  {
    image: 'https://images.unsplash.com/photo-1449965408869-ebd13bc9e5a8?w=600&q=80',
    category: 'Defensive Driving',
    price: '$180',
    title: 'Defensive Driving',
    lessons: '10 Lessons',
    duration: '3 Weeks',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1617650728468-8583b1b3c1e9?w=600&q=80',
    category: 'Advanced',
    price: '$200',
    title: 'Advanced Road Skills',
    lessons: '15 Lessons',
    duration: '5 Weeks',
  },
];

export default function Courses() {
  return (
    <section className="courses reveal" id="courses">
      <div className="courses__inner container">
        <p className="courses__label">Learn From The Best</p>
        <h2 className="courses__title">Our Popular Driving Courses</h2>

        <div className="courses__grid">
          {courses.map((course) => (
            <div
              className={`courses__card${course.featured ? ' courses__card--featured' : ''}`}
              key={course.title}
            >
              <div className="courses__card-img-wrap">
                <img src={course.image} alt={course.title} className="courses__card-img" />
                <span className="courses__card-category">{course.category}</span>
              </div>
              <div className="courses__card-body">
                <div className="courses__card-meta">
                  <span><i className="fa-solid fa-book-open"></i> {course.lessons}</span>
                  <span><i className="fa-regular fa-clock"></i> {course.duration}</span>
                </div>
                <h3 className="courses__card-title">{course.title}</h3>
                <div className="courses__card-footer">
                  <span className="courses__card-price">{course.price}</span>
                  <a href="#contact" className="courses__card-btn">Enroll Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
