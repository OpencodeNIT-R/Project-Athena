import Lenis from 'lenis';
import Gallery from './components/Gallery/Gallery';
import Placeholder from './components/MeetTheTeam/Placeholder';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';

// Initialize Lenis
// eslint-disable-next-line no-unused-vars
const lenis = new Lenis({
  autoRaf: true,
});

const Playground = () => {
  return (
    <div>
      <Placeholder />
      <Gallery />
      <MeetTheTeam />
      <Placeholder />
    </div>
  );
};

export default Playground;
