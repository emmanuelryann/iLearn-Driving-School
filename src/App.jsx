import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Courses from './components/Courses';
import Instructors from './components/Instructors';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Courses />
      <Instructors />
      <Experience />
      <Pricing />
      <Cta />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
