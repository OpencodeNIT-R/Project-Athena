import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const images = [
  'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8197_bqosvx.png',
  'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8050_ptbz0x.png',
  'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8054_liggqt.png',
  'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8197_bqosvx.png',
  'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8050_ptbz0x.png',
  'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8054_liggqt.png',
];

const getSpacing = () => {
  const vw = window.innerWidth;
  if (vw < 640) return 95; // Mobile
  if (vw < 1024) return 60; // Tablet
  if (vw < 1440) return 48; // Small desktop
  return 42; // Large screens
};

const EventsHeader = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;
    if (!items || items.length < 3) return;

    const itemCount = items.length;
    let current = 0;

    const spacing = getSpacing();

    const setPositions = () => {
      items.forEach((item, index) => {
        const pos = index - current;
        gsap.set(item, {
          zIndex: index === current ? 2 : 1,
          scale: index === current ? 1.2 : 1,
          opacity: 1,
          x: `${pos * spacing}vw`,
        });
      });
    };

    const cycle = () => {
      current = (current + 1) % itemCount;

      items.forEach((item, index) => {
        const pos = (index - current + itemCount) % itemCount;
        gsap.to(item, {
          x: `${(pos - 1) * spacing}vw`,
          scale: pos === 1 ? 1.5 : 1,
          zIndex: pos === 1 ? 2 : 1,
          duration: 1,
          ease: 'power2.inOut',
          opacity: pos === 1 || pos === 0 || pos === 2 ? 1 : 0,
        });
      });
    };

    setPositions();
    const interval = setInterval(cycle, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[120dvh] flex flex-col items-center justify-center gap-14 max-w-screen pt-24 lg:pt-0">
      <div className="px-2 lg:px-[15%]" id="events-page-header">
        <div className="text-5xl md:text-[7vw]  2xl:text-[9vw] font-silverEditorial leading-relaxed tracking-wider italic">
          Playful Events
        </div>
        <div className="text-5xl md:text-[7vw]  2xl:text-[9vw] font-silverEditorial text-end lg:leading-[12rem] lg:tracking-[7%]">
          All Year
        </div>
      </div>
      <div
        className="w-11/12 font-robotoMono text-[#F8F8F8B8] text-lg lg:text-2xl text-center leading-10 tracking-wide"
        id="events-page-desc"
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos consectetur
        adipiscing elit
      </div>

      <div
        ref={containerRef}
        className="relative flex items-center justify-center h-[18rem] lg:h-[30rem] w-full overflow-hidden"
      >
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="absolute w-[60vw] max-w-[500px] lg:w-[50vw] aspect-[16/9] rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={src}
              alt={`event-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsHeader;
