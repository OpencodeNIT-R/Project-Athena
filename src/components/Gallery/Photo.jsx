import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Photo = ({ color, id, rotateFrom, rotateTo }) => {
  const photoRef = useRef(null);

  useEffect(() => {
    gsap.to(photoRef.current, {
      rotate: `${rotateTo}deg`,
      yoyo: true,
      repeat: -1,
      ease: 'steps(3)',
      duration: 2,
    });
  }, [rotateTo]);

  return (
    <div
      className="md:w-[33dvw] w-[80dvw] aspect-[5/4] flex-shrink-0 p-4"
      ref={photoRef}
      style={{ rotate: `${rotateFrom}deg` }}
    >
      <div className="h-full w-full bg-white flex flex-col items-center justify-center">
        <div
          style={{ backgroundColor: color }}
          className="w-[90%] aspect-[3/2] text-7xl justify-center flex items-center"
        >
          {id}
        </div>
        <div id="spacer" className="h-[10%]"></div>
      </div>
    </div>
  );
};

export default Photo;
