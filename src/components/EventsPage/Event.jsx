import gsap from 'gsap';
import EventDescription from './EventDescription';
import EventPic from './EventPic';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const Event = ({ event }) => {
  const eventRef = useRef();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const eventDescTL = gsap.timeline({
        scrollTrigger: {
          trigger: '#event',
          start: 'top top',
          end: 'top -400%',
          scrub: 2,
          pin: true,
        },
      });
      eventDescTL
        .from('#event-1', {
          y: '100%',
          opacity: 0,
          stagger: 0.2,
          ease: 'sine.in',
        })
        .to('#event-1', {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        })
        .to('#event-1', {
          y: '-100%',
          opacity: 0,
          stagger: 0.2,
          ease: 'sine.out',
        })
        .from(
          '#event-2',
          {
            y: '100%',
            opacity: 0,
            stagger: 0.2,
            ease: 'sine.in',
          },
          '<'
        )
        .to('#event-2', {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        })
        .to('#event-2', {
          y: '-100%',
          opacity: 0,
          stagger: 0.2,
          ease: 'sine.out',
        })
        .from(
          '#event-3',
          {
            y: '100%',
            opacity: 0,
            stagger: 0.2,
            ease: 'sine.in',
          },
          '<'
        )
        .to('#event-3', {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        })
        .to('#event-3', {
          y: '-100%',
          opacity: 0,
          stagger: 0.2,
          ease: 'sine.out',
        });
    },
    { scope: eventRef }
  );
  return (
    <div ref={eventRef} className="w-screen lg:pt-0">
      <div
        className="h-screen flex flex-col lg:flex-row items-center relative max-w-screen pt-20 lg:pt-0"
        id="event"
      >
        <img
          src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829420/dots_rqtxh8.png"
          alt=""
          className="absolute h-screen w-screen"
        />
        <div className="flex flex-col lg:w-1/2 justify-center pl-[5vw] lg:gap-8">
          <div className="font-silverEditorial text-5xl lg:text-7xl leading-[131.74px]">
            {event.eventName}
          </div>
          <div className="h-72 lg:h-48 relative w-[80vw] lg:w-[38rem] max-w-screen">
            {event.eventDescriptions.map((item, idx) => (
              <EventDescription key={idx} text={item} id={idx + 1} />
            ))}
          </div>
        </div>
        <div className="w-[90%] aspect-[2/1] lg:w-[52rem] lg:h-[30rem] relative pr-[5vw]">
          {event.eventImages.map((item, idx) => (
            <EventPic src={item} key={idx} id={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
