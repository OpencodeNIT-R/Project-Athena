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
            className={`bg-[radial-gradient(circle,_#BD00FF_25%,_#BD00FF11_75%)] absolute h-20 w-20 rounded-full ${translateClass} -translate-y-full`}
          ></div>
        </div>
      </div>
      <div
        className={`h-1/2 w-[5px] absolute origin-top  ${translateClass} top-1/2 ${rotationClass} overflow-hidden`}
      >
        <div className="relative h-full w-full bg-[#BD00FF33]">
          <div
            id={`white-${id}-2`}
            className={`bg-[radial-gradient(circle,_#BD00FF_25%,_#BD00FF11_75%)] absolute h-20 w-20 rounded-full ${translateClass} -translate-y-44`}
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
            repeat: -1,
            ease: easings[index],
          },
          0
        );
      });
    };

    animateElements(firstSet, '12rem');
    animateElements(secondSet, '6rem');
    //bg-[linear-gradient(180deg,_#0C0C1D_0%,_#070614FA_100%)]
  });
  return (
    <div className="h-48 w-96 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  max-w-[90dvw] z-10">
      <div className="z-20 relative flex w-full h-full">
        <PulseElement position="left" id="1" />
        <PulseElement position="left" id="2" />
        <PulseElement position="center" id="3" />
        <PulseElement position="right" id="4" />
        <PulseElement position="right" id="5" />
      </div>
    </div>
  );
};
export default Pulse;
