import '../styles/Courses.css';

const courses = [
  {
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerxViCmTebkHQu4F8kkjFnpahGeVHdWwfylFuWKBZK9HZz9fUHnIy81-cowNXtMJKGnpIL3ADfNbIJ8spLdiBvmg_yYBx8DrORmXuOX0fCepvi3If6Ps4ZQZVm0ZuKPKBGhtFb_5w=s1360-w1360-h1020-rw',
    category: 'Beginner',
    price: '245',
    title: 'Beginner Driving Course',
    lessons: '12 Lessons',
    duration: '4 Weeks',
  },
  {
    image: 'https://images.pexels.com/photos/9518244/pexels-photo-9518244.jpeg',
    category: 'Defensive Driving',
    price: '310',
    title: 'Defensive Driving',
    lessons: '10 Lessons',
    duration: '3 Weeks',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1563161084-b4c9f34d60ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpdmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Advanced',
    price: '430',
    title: 'Advanced Road Skills',
    lessons: '15 Lessons',
    duration: '5 Weeks',
  },
];

export default function Courses() {
  return (
    <section className="courses" id="courses">
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
                  <span className="courses__card-price">₵{course.price}</span>
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
