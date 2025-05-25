import Event from './Event';
import { eventInfo } from './eventInfo';

const EventScroller = () => {
  return (
    <div className="min-h-screen bg-[#060714] text-white overflow-x-hidden flex flex-col items-center justify-center">
      {eventInfo.map((item, key) => (
        <Event key={key} event={item} />
      ))}
    </div>
  );
};

export default EventScroller;
