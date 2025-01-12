import Lenis from 'lenis';
import Gallery from './components/Gallery/Gallery';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import Hero from './components/Hero/hero.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';

// Initialize Lenis
// eslint-disable-next-line no-unused-vars
const lenis = new Lenis({
  autoRaf: true,
});

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Gallery />
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default App;
