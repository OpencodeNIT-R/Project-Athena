import Lenis from 'lenis';
import Gallery from './components/Gallery/Gallery';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import Hero from './components/hero.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

// Initialize Lenis
// eslint-disable-next-line no-unused-vars
const lenis = new Lenis({
  autoRaf: true,
});

const Playground = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <MeetTheTeam />
      <Footer />
    </div>
  );
};

export default Playground;
