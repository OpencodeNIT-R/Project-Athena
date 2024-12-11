import MeetTheTeam from './components/Meet the Team/MeetTheTeam';
import Lenis from 'lenis';
import Placeholder from './components/Meet the Team/Placeholder';

// Initialize Lenis
// eslint-disable-next-line no-unused-vars
const lenis = new Lenis({
  autoRaf: true,
});

const Playground = () => {
  return (
    <div>
      <Placeholder />
      <MeetTheTeam />
      <Placeholder />
    </div>
  );
};

export default Playground;
