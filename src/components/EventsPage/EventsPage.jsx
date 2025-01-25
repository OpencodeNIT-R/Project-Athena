import EventScroller from './EventScroller';
import EventsHeader from './EventsPageHeader';
import Navbar from '../shared/Navbar/navbar';
import Footer from '../shared/Footer/footer';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#060714] text-white overflow-x-hidden max-w-screen lg:pt-24">
      <Navbar />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829420/dots_rqtxh8.png"
        alt=""
        className="absolute h-screen w-screen"
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829425/light1_l6gwo2.png"
        alt=""
        className="absolute top-0 h-3/4 left-16 hidden lg:block"
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829427/light2_zuok5s.png"
        alt=""
        className="absolute top-0 h-1/2"
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829428/light3_etmaya.png"
        alt=""
        className="absolute top-0 h-3/4"
      />
      <EventsHeader />
      <EventScroller />
      <Footer />
    </div>
  );
};

export default EventsPage;
