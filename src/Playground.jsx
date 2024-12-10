import MeetTheTeam from './components/Meet the Team/MeetTheTeam';
import Lenis from 'lenis';

// Initialize Lenis
// eslint-disable-next-line no-unused-vars
const lenis = new Lenis({
  autoRaf: true,
});

const Playground = () => {
  return (
    <div>
      <MeetTheTeam />
    </div>
  );
};

export default Playground;
