import Photo from './Photo';
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../shared/Heading';

const Gallery = () => {
  // eslint-disable-next-line no-unused-vars
  const [meetCoolPeople, setMeetCoolPeople] = useState(() => [
    {
      src: 'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8197_bqosvx.png',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      src: 'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165997/image_8195_df6msw.png',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      src: 'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8050_ptbz0x.png',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      src: 'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8048_l6c63p.png',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      src: 'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8054_liggqt.png',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      src: 'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165997/image_8049_uje361.png',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      src: 'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165997/image_8046_lsrwjc.png',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
  ]);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const stConfig = {
    scrollTrigger: {
      trigger: '#meet-cool-people',
      scroller: 'body',
      start: 'top top',
      end: 'top -400%',
      scrub: 2,
      pin: true,
    },
  };

  useGSAP(() => {
    const mcpTL = gsap.timeline(stConfig);
    mcpTL.to(
      '#meet-cool-people-photos',
      {
        x: '-133.33%',
      },
      0
    );
    mcpTL.to(
      '#meet-cool-people',
      {
        backgroundColor: '#1a1a1a',
      },
      0
    );
  });

  return (
    <div
      className="bg-[#060714] h-screen text-white flex justify-evenly items-center flex-col relative w-screen overflow-hidden"
      id="meet-cool-people"
    >
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734166017/leftLight_prua8v.svg"
        className="absolute top-0 left-0 -z-10"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734166017/rightLight_xqcort.svg"
        className="absolute top-0 right-0 -z-10"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734166017/centerLight_rkwtur.svg"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full -z-10"
        alt=""
      />
      <Heading>
        Meet our <i className="text-[#A546FF]">Cool People</i>
      </Heading>
      <div id="meet-cool-people-photos" className="relative z-10 w-full">
        <div id="scroller" className="no-scrollbar md:flex hidden">
          {meetCoolPeople.map((item, idx) => {
            return (
              <Photo
                key={idx}
                src={item.src}
                rotateFrom={item.rotateFrom}
                rotateTo={item.rotateTo}
              />
            );
          })}
        </div>
        <div id="scroller-mobile-left" className="flex no-scrollbar md:hidden">
          {meetCoolPeople
            .slice(0, Math.ceil(meetCoolPeople.length / 2))
            .map((item, idx) => (
              <Photo
                key={idx}
                src={item.src}
                rotateFrom={item.rotateFrom}
                rotateTo={item.rotateTo}
              />
            ))}
        </div>
        <div id="scroller-mobile-right" className="flex no-scrollbar md:hidden">
          {meetCoolPeople
            .slice(Math.ceil(meetCoolPeople.length / 2))
            .map((item, idx) => (
              <Photo
                key={idx}
                src={item.src}
                rotateFrom={item.rotateFrom}
                rotateTo={item.rotateTo}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
