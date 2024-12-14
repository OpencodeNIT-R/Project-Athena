import Heading from '../shared/Heading';
import AnimatedButton from './AnimatedButton';
import TextWithModal from './TextWithModal';

const topics = ['Open-Source', 'Cybersecurity', 'Web Dev', 'App Dev', 'AI/ML'];

const AboutUs = () => {
  return (
    <div className="h-screen bg-[#060714] sticky top-0 grid place-items-center text-white -z-10">
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

        <div className="flex flex-col items-center gap-8 justify-center basis-1">
          <Heading extraCSS={{ color: '#A546FF', fontFamily: 'Montserrat' }}>
            About us.
          </Heading>
          <TextWithModal />
        </div>
        <div className="h-full w-full basis-1 flex justify-center items-center flex-wrap-reverse flex-col md:flex-row gap-4 md:gap-0">
          {topics.map((item, idx) => {
            return (
              <div
                className="md:w-1/3 w-full flex justify-center items-center"
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
