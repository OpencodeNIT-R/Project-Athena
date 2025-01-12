import Heading from '../shared/Heading';
import AnimatedButton from './AnimatedButton';
import TextWithModal from './TextWithModal';

const topics = ['AI/ML', 'Web Dev', 'App Dev', 'Cybersecurity', 'Open-Source'];

const AboutUs = () => {
  return (
    <div className="h-screen bg-[#060714] sticky top-0 grid place-items-center text-white -z-10 bg-[linear-gradient(180deg,_#0C0C1D_0%,_#070614FA_10%)]">
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829420/dots_rqtxh8.png"
        alt=""
        className="absolute h-screen"
      />
      <div
        id="about-us"
        className="relative w-[80%] h-[80%] rounded-xl inset-shadow overflow-hidden border-gradient grid place-items-center"
      >
        <img
          src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829425/light1_l6gwo2.png"
          alt=""
          className="absolute top-0 h-3/5 -z-10 left-4"
        />
        <img
          src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829427/light2_zuok5s.png"
          alt=""
          className="absolute top-0 h-3/5 -z-10 -left-8"
        />
        <img
          src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829428/light3_etmaya.png"
          alt=""
          className="absolute top-0 h-3/5 -z-10 left-0"
        />

        <div className="flex flex-col items-center gap-8 justify-center basis-1 py-6">
          <Heading extraCSS={{ color: '#A546FF', fontFamily: 'Montserrat' }}>
            About us.
          </Heading>
          <TextWithModal />
        </div>
        <div className="h-full w-full flex flex-wrap gap-2 items-center justify-center pb-12 md:gap-0">
          {topics.map((item, idx) => {
            return (
              <div
                className="w-fit md:w-1/3 flex justify-center items-center"
                key={idx}
              >
                <AnimatedButton text={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
