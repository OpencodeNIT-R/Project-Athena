import Photo from './Photo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../../shared/Heading';

const MeetTheTeam = () => {
  const [orientation, setOrientation] = useState(
    window.screen.orientation.type.split('-')[0]
  );

  useEffect(() => {
    setOrientation(window.screen.orientation.type.split('-')[0]);
  }, [setOrientation]);

  // eslint-disable-next-line no-unused-vars
  const [meetTheTeam, setMeetTheTeam] = useState(() => [
    {
      name: 'Dhrutinandan Swain',
      post: 'President',
      photo:
        'https://res.cloudinary.com/doojbkvn6/image/upload/v1747995996/Picture_Window_rxolzh.png',
      rotateFrom: '0',
      rotateTo: 'rotate-[-4.07deg]',
    },
    {
      name: 'Harsh Verma',
      post: 'Vice President',
      photo:
        'https://res.cloudinary.com/doojbkvn6/image/upload/v1747996090/Picture_Window_1_woz6ls.png',
      rotateFrom: '0',
      rotateTo: 'rotate-[2.17deg]',
    },
    {
      name: 'Siddharth Mishra',
      post: 'Technical Lead',
      photo:
        'https://res.cloudinary.com/doojbkvn6/image/upload/v1747996090/Picture_Window_2_smhw1k.png',
      rotateFrom: '0',
      rotateTo: 'rotate-[-1.5deg]',
    },
    {
      name: 'Shriya Dalai',
      post: 'Community Manager',
      photo:
        'https://res.cloudinary.com/doojbkvn6/image/upload/v1747996091/Picture_Window_3_-Picsart-AiImageEnhancer_obe20w.png',
      rotateFrom: '0',
      rotateTo: 'rotate-[5.36deg]',
    },
    {
      name: 'Stitha Pragyan Jali',
      post: 'Design Lead',
      photo:
        'https://res.cloudinary.com/doojbkvn6/image/upload/v1747996090/Picture_Window_4_jzttwk.png',
      rotateFrom: '0',
      rotateTo: 'rotate-[-3.36deg]',
    },
  ]);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const stConfig = {
    trigger: '#meet-the-team',
    scroller: 'body',
    start: 'top top',
    end: 'top -400%',
    scrub: 2,
  };

  const setupConfig = {
    scrollTrigger: {
      ...stConfig,
      pin: true,
    },
  };

  const baseConfig = {
    scrollTrigger: {
      ...stConfig,
    },
  };

  useGSAP(() => {
    const photoTL = gsap.timeline(setupConfig);
    photoTL
      .from('#photo0', {
        y: orientation == 'portrait' ? '80dvh' : '100%',
        rotate: 0,
        duration: 2,
        delay: 1,
        ease: 'power4.out',
      })
      .from('#photo1', {
        y: orientation == 'portrait' ? '80dvh' : '100%',
        rotate: 0.56,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#photo2', {
        y: orientation == 'portrait' ? '80dvh' : '100%',
        rotate: -9.23,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#photo3', {
        y: orientation == 'portrait' ? '80dvh' : '100%',
        rotate: 3.93,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#photo4', {
        y: orientation == 'portrait' ? '80dvh' : '100%',
        rotate: -9.54,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const photoFadeTL = gsap.timeline(baseConfig);
    photoFadeTL
      .to('#photo0-film', {
        opacity: 0.6,
        duration: 2,
        delay: 3,
        ease: 'power4.out',
      })
      .to('#photo1-film', {
        opacity: 0.6,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#photo2-film', {
        opacity: 0.6,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#photo3-film', {
        opacity: 0.6,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const nameTL = gsap.timeline(baseConfig);
    nameTL
      .from('#name-0', {
        y: '100%',
        opacity: 0,
        duration: 2,
        delay: 1,
        ease: 'power4.out',
      })
      .from('#name-1', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#name-2', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#name-3', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#name-4', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const nameFadeTL = gsap.timeline(baseConfig);
    nameFadeTL
      .to('#name-0', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        delay: 3,
        ease: 'power4.out',
      })
      .to('#name-1', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#name-2', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#name-3', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const postTL = gsap.timeline(baseConfig);
    postTL
      .from('#post-0', {
        y: '100%',
        opacity: 0,
        duration: 2,
        delay: 1,
        ease: 'power4.out',
      })
      .from('#post-1', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#post-2', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#post-3', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#post-4', {
        y: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const postFadeTL = gsap.timeline(baseConfig);
    postFadeTL
      .to('#post-0', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        delay: 3,
        ease: 'power4.out',
      })
      .to('#post-1', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#post-2', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#post-3', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      });
  });

  return (
    <div
      className=" text-white top-0 bg-[#1a1a1a] h-screen no-scrollbar relative pointer-events-none overflow-hidden"
      id="meet-the-team"
    >
      {/* background */}
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829420/dots_rqtxh8.png"
        alt=""
        className="absolute h-screen"
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829425/light1_l6gwo2.png"
        alt=""
        className="absolute top-0 h-1/2 left-16"
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829427/light2_zuok5s.png"
        alt=""
        className="absolute top-0 h-1/2"
      />
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829428/light3_etmaya.png"
        alt=""
        className="absolute top-0 h-1/2"
      />

      <div className="flex justify-center items-center h-full relative flex-wrap">
        {/* heading */}
        <Heading
          extraCSS={{
            marginTop: window.screen.innerWidth <= 1024 ? '5rem' : '8rem',
            width: '100dvw',
            textAlign: 'center',
          }}
        >
          Meet The Team
        </Heading>

        {/* gallery section */}
        <div
          className="w-full flex h-full"
          id="gallery"
          style={
            orientation == 'landscape'
              ? { flexDirection: 'row', paddingBottom: '5rem' }
              : {
                  flexDirection: 'column',
                  height: 'max-content',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }
        >
          {/* names */}
          <div
            id="name"
            className="text-center relative font-robotoMono"
            style={
              orientation == 'landscape'
                ? {
                    width: '33%',
                    height: '100%',
                  }
                : {
                    width: '100%',
                    height: '2.5rem',
                    marginBottom: '-2rem',
                    marginTop: '2rem',
                  }
            }
          >
            {meetTheTeam.map((item, idx) => {
              return (
                <div
                  className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-full text-3xl"
                  id={`name-${idx}`}
                  key={idx}
                >
                  {item.name.toUpperCase()}
                </div>
              );
            })}
          </div>

          {/* photos */}
          <div
            id="photos"
            className="relative"
            style={
              orientation == 'landscape'
                ? { width: '33%', height: '100%' }
                : { width: '100%', height: '100dvw' }
            }
          >
            <div className="absolute h-0 border-white border-2 w-[90dvw] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
            {meetTheTeam.map((item, id) => {
              return (
                <Photo
                  src={item.photo}
                  rotate={item.rotateTo}
                  z={id}
                  key={id}
                  id={`photo${id}`}
                />
              );
            })}
          </div>

          {/* post */}
          <div
            id="post"
            className="text-center relative font-playfair lg:h-full"
            style={
              orientation == 'landscape'
                ? {
                    width: '33%',
                    height: '100%',
                  }
                : {
                    width: '100%',
                    height: '2.5rem',
                  }
            }
          >
            {meetTheTeam.map((item, idx) => {
              return (
                <div
                  className="absolute top-1/2 -translate-y-full right-1/2 w-full translate-x-1/2 text-center text-3xl"
                  id={`post-${idx}`}
                  key={idx}
                >
                  {item.post}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
