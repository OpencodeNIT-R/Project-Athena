import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Photo = ({ rotateFrom, rotateTo, src }) => {
  const photoRef = useRef(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(photoRef.current, {
      rotate: `${rotateTo}deg`,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      duration: 2,
    });
  }, [rotateTo]);

  return (
    <div
      className="md:w-[33dvw] w-[80dvw] aspect-[5/4] flex-shrink-0 p-4 for-tablets"
      ref={photoRef}
      style={{ rotate: `${rotateFrom}deg` }}
    >
      <div className="h-full w-full bg-white flex flex-col items-center justify-center">
        <div className="w-[90%] aspect-[3/2] flex justify-center items-center overflow-hidden">
          <img src={src} alt="hello" className="h-full w-full object-cover" />
        </div>
        <div id="spacer" className="h-[10%]"></div>
      </div>
    </div>
  );
};

export default Photo;
