import leftLight from './assets/leftLight.svg';
import rightLight from './assets/rightLight.svg';
import centerLight from './assets/centerLight.svg';
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
      color: '#ca99b3',
      id: '0',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      color: '#886a28',
      id: '1',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      color: '#369121',
      id: '2',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      color: '#c7a50c',
      id: '3',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      color: '#ea8311',
      id: '4',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      color: '#439a49',
      id: '5',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
    {
      color: '#def00c',
      id: '6',
      rotateFrom: gsap.utils.random(-10, 10),
      rotateTo: gsap.utils.random(-10, 10),
    },
  ]);
  console.log(meetCoolPeople);

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
      <img src={leftLight} className="absolute top-0 left-0" alt="" />
      <img src={rightLight} className="absolute top-0 right-0" alt="" />
      <img
        src={centerLight}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
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
                color={item.color}
                id={item.id}
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
                color={item.color}
                id={item.id}
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
                color={item.color}
                id={item.id}
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
