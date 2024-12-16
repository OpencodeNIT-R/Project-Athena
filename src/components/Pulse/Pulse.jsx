import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PulseElement = ({ position, id }) => {
  const rotationClass =
    position === 'left'
      ? '-rotate-45 -translate-y-[2px]'
      : position === 'right'
        ? 'rotate-45 -translate-y-[2px]'
        : 'h-[36%] -translate-y-[1px]';
  const translateClass =
    position === 'left'
      ? '-translate-x-1/2 '
      : position === 'right'
        ? 'right-0 translate-x-1/2'
        : 'left-1/2 -translate-x-1/2';

  return (
    <div className="w-1/5 h-full flex flex-col relative">
      <div
        className={`h-1/2 w-[5px] absolute origin-top  ${translateClass} overflow-hidden`}
      >
        <div className="relative h-full w-full bg-[#BD00FF33]">
          <div
            id={`white-${id}-1`}
            className={`bg-[radial-gradient(circle,_#BD00FF_25%,_#BD00FF11_75%)] absolute h-20 w-20 rounded-full ${translateClass}`}
          ></div>
        </div>
      </div>
      <div
        className={`h-1/2 w-[5px] absolute origin-top  ${translateClass} top-1/2 ${rotationClass} overflow-hidden`}
      >
        <div className="relative h-full w-full bg-[#BD00FF33]">
          <div
            id={`white-${id}-2`}
            className={`bg-[radial-gradient(circle,_#BD00FF_25%,_#BD00FF11_75%)] absolute h-20 w-20 rounded-full ${translateClass} -translate-y-24`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Pulse = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline();

    const firstSet = [
      '#white-1-1',
      '#white-2-1',
      '#white-3-1',
      '#white-4-1',
      '#white-5-1',
    ];
    const secondSet = [
      '#white-1-2',
      '#white-2-2',
      '#white-3-2',
      '#white-4-2',
      '#white-5-2',
    ];

    const easings = [
      'power4.inOut',
      'back.inOut',
      'sine.inOut',
      'circ.inOut',
      'elastic.inOut',
    ];

    const durations = [4, 3, 5, 6, 7];

    const animateElements = (selectors, yValue) => {
      selectors.forEach((selector, index) => {
        tl.to(
          selector,
          {
            y: yValue,
            duration: durations[index],
            yoyo: true,
            repeat: -1,
            ease: easings[index],
          },
          0
        );
      });
    };

    animateElements(firstSet, '12rem');
    animateElements(secondSet, '6rem');
  });
  return (
    <div className="h-48 w-96 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex">
      <div
        id="black-film"
        className="absolute top-0 right-1/2 h-full translate-x-1/2 bg-[linear-gradient(to_bottom,_black_0%,_transparent_25%,_transparent_70%,_#0C0C1D_100%)] z-10 w-[110%]"
      ></div>
      <PulseElement position="left" id="1" />
      <PulseElement position="left" id="2" />
      <PulseElement position="center" id="3" />
      <PulseElement position="right" id="4" />
      <PulseElement position="right" id="5" />
    </div>
  );
};

export default Pulse;
