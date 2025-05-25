import Lenis from 'lenis';
import Navbar from './components/shared/Navbar/navbar';
import Hero from './components/Home/Hero/hero';
import AboutUs from './components/Home/AboutUs/AboutUs.jsx';
import Gallery from './components/Home/Gallery/Gallery.jsx';
import MeetTheTeam from './components/Home/MeetTheTeam/MeetTheTeam';
import Footer from './components/shared/Footer/footer.jsx';

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
