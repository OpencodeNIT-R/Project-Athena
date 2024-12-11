import Photo from './Photo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MeetTheTeam = () => {
  // eslint-disable-next-line no-unused-vars
  const [meetTheTeam, setMeetTheTeam] = useState(() => [
    {
      name: 'Suryakant Jena',
      post: 'President',
      photo:
        'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733908269/surya_v5ojeq.png',
      rotateFrom: '0',
      rotateTo: '8.07',
    },
    {
      name: 'Prapti P Pradhan',
      post: 'Vice President',
      photo:
        'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733908321/prapti_usrcux.png',
      rotateFrom: '0',
      rotateTo: '-4.17',
    },
    {
      name: 'Riya Pojage',
      post: 'Community Manager',
      photo:
        'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733908304/riya_pojage_kui6lj.png',
      rotateFrom: '0',
      rotateTo: '0',
    },
    {
      name: 'Srishty Mangutte',
      post: 'Tech Lead',
      photo:
        'https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733908286/sristy_dxorna.png',
      rotateFrom: '0',
      rotateTo: '6.73',
    },
  ]);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const stConfig = {
    trigger: '#meet-the-team',
    scroller: 'body',
    start: 'top top',
    end: 'top -200%',
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
        top: '100%',
        rotate: 0,
        duration: 2,
        delay: 1,
        ease: 'power4.out',
      })
      .from('#photo1', {
        top: '100%',
        rotate: 0.56,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#photo2', {
        top: '100%',
        rotate: -9.23,
        duration: 2,
        ease: 'power4.out',
      })
      .from('#photo3', {
        top: '100%',
        rotate: 3.93,
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
      });
  });

  useGSAP(() => {
    const nameTL = gsap.timeline(baseConfig);
    nameTL
      .to('#name-0', {
        top: 0,
        opacity: 1,
        duration: 2,
        delay: 1,
        ease: 'power4.out',
      })
      .to('#name-1', {
        top: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#name-2', {
        top: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#name-3', {
        top: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const nameFadeTL = gsap.timeline(baseConfig);
    nameFadeTL
      .to('#name-0', {
        top: '-100%',
        opacity: 0,
        duration: 2,
        delay: 3,
        ease: 'power4.out',
      })
      .to('#name-1', {
        top: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#name-2', {
        top: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const postTL = gsap.timeline(baseConfig);
    postTL
      .to('#post-0', {
        top: 0,
        opacity: 1,
        duration: 2,
        delay: 1,
        ease: 'power4.out',
      })
      .to('#post-1', {
        top: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#post-2', {
        top: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#post-3', {
        top: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
      });
  });

  useGSAP(() => {
    const postFadeTL = gsap.timeline(baseConfig);
    postFadeTL
      .to('#post-0', {
        top: '-100%',
        opacity: 0,
        duration: 2,
        delay: 3,
        ease: 'power4.out',
      })
      .to('#post-1', {
        top: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      })
      .to('#post-2', {
        top: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'power4.out',
      });
  });

  return (
    <div
      className="bg-[#1a1a1a] text-white top-0 overflow-x-hidden h-screen no-scrollbar pointer-events-none"
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

      <div className="flex justify-center items-center flex-col h-full">
        {/* heading */}
        <h1 className="playfair-display text-3xl sm:text-7xl my-12">
          Meet The Team
        </h1>

        {/* gallery section */}
        <div
          className=" flex pt-12 w-full gap-8 relative h-full min-[1440px]:flex-row flex-col"
          id="gallery"
        >
          <div
            className="absolute h-0 border-white border-2 w-[90%] left-1/2 -translate-x-1/2"
            style={{ top: 'calc( 50% + 2.5rem )' }}
          ></div>
          {/* names */}
          <div
            id="name"
            className="min-[1440px]:basis-full items-center justify-center text-4xl flex-col flex"
          >
            <div className="h-10 text-center relative w-full px-8 roboto-mono">
              {meetTheTeam.map((item, idx) => {
                return (
                  <div
                    className="absolute top-full left-1/2 w-full -translate-x-1/2 opacity-0"
                    id={`name-${idx}`}
                    key={idx}
                  >
                    {item.name.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </div>

          {/* photos */}
          <div
            id="photos"
            className="basis-full relative flex justify-center items-center"
          >
            {meetTheTeam.map((item, id) => {
              return (
                <Photo
                  color={item.photo}
                  rotate={item.rotateTo}
                  z={id}
                  top={0}
                  key={id}
                  id={`photo${id}`}
                />
              );
            })}
          </div>

          {/* post */}
          <div
            id="post"
            className="min-[1440px]:basis-full min-[1440px]:static absolute bottom-12 left-1/2 w-screen -translate-x-1/2 translate-y-1/2 min-[1440px]:translate-x-0 min-[1440px]:translate-y-0 text-4xl playfair-display flex justify-center items-center"
          >
            <div className="h-10 text-center relative w-full">
              {meetTheTeam.map((item, idx) => {
                return (
                  <div
                    className="absolute top-full right-1/2 w-full translate-x-1/2 opacity-0 text-xl md:text-3xl  "
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
    </div>
  );
};

export default MeetTheTeam;
