import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AnimatedButton = ({ text }) => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to('#rotate-this', {
      rotate: '720deg',
      duration: 4,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to('#rotate-that', {
      rotate: '720deg',
      duration: 4,
      repeat: -1,
      ease: 'linear',
    });
  });
  return (
    <div id="container" className="rounded-lg relative overflow-hidden p-[2px]">
      <div
        id="rotate-this"
        className="absolute bg-gradient-to-br from-[#BC01FE9C] to-[#00000033] w-[110%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      ></div>
      <div
        id="black-box"
        className="bg-[#060714] h-full relative rounded-lg z-20 p-[1.2px]"
      >
        <div
          id="inner-container"
          className="h-full rounded-lg relative overflow-hidden p-[1px]"
        >
          <div
            id="rotate-that"
            className="absolute bg-gradient-to-br from-[#BC01FE9C] to-[#00000033] w-[110%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          ></div>
          <div className="bg-[#060714] h-full rounded-lg relative z-10 inner-shadow">
            <div className="inner-shadow w-full h-full rounded-lg justify-center items-center flex bg-gradient-to-b from-[#0E0D20] to-[#482568] font-robotoMono px-6 py-2 md:text-xl text-sm">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedButton;
