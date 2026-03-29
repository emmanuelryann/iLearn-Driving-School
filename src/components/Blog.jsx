import '../styles/Blog.css';

const posts = [
  {
    image: 'https://t3.ftcdn.net/jpg/04/02/93/50/240_F_402935065_lCslREPGLCpJW8acaFH5rMC2gOBFi6lJ.jpg',
    date: 'March 15, 2026',
    category: 'Tips',
    title: 'The Benefits of Taking a Professional Driving Course',
    excerpt: 'Discover why investing in professional driving lessons can save you time, money, and keep you safer on the road.',
  },
  {
    image: 'https://t3.ftcdn.net/jpg/07/12/21/52/240_F_712215208_xwz3eliLuWY8fBMkAPYbCb96EwDHuUCP.jpg',
    date: 'March 10, 2026',
    category: 'Safety',
    title: 'All Points to Focus Your Driving Test Practice',
    excerpt: 'Learn the key areas to concentrate on during your practice sessions to ensure you pass your driving test with confidence.',
  },
  {
    image: 'https://t3.ftcdn.net/jpg/01/73/06/54/240_F_173065418_Ha5fgjSRmN5gMlTF6Bgz3rSFYbVKX3Zf.jpg',
    date: 'March 5, 2026',
    category: 'Guide',
    title: 'How To Improve Your Driving Skills Effectively',
    excerpt: 'Essential tips and techniques to help you become a better, safer driver with practical exercises you can do every day.',
  },
];

export default function Blog() {
  return (
    <section className="blog">
      <div className="blog__inner container">
        <p className="blog__label">From Our Blog</p>
        <h2 className="blog__heading">Our Latest News &amp; Articles</h2>

        <div className="blog__grid">
          {posts.map((post) => (
            <div className="blog__card" key={post.title}>
              <div className="blog__card-img-wrap">
                <img src={post.image} alt={post.title} className="blog__card-img" />
              </div>
              <div className="blog__card-body">
                <div className="blog__card-meta">
                  <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
                  <span><i className="fa-solid fa-tag"></i> {post.category}</span>
                </div>
                <h3 className="blog__card-title">{post.title}</h3>
                <p className="blog__card-excerpt">{post.excerpt}</p>
                <a href="#" className="blog__card-link">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
