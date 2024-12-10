import Photo from './Photo';
import Placeholder from './Placeholder';
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
      photo: 'red',
      rotateFrom: '0',
      rotateTo: '8.07',
    },
    {
      name: 'Prapti P Pradhan',
      post: 'Vice President',
      photo: 'blue',
      rotateFrom: '0',
      rotateTo: '-4.17',
    },
    {
      name: 'Riya Pojage',
      post: 'Community Manager',
      photo: 'yellow',
      rotateFrom: '0',
      rotateTo: '0',
    },
    {
      name: 'Srishty Mangutte',
      post: 'Tech Lead',
      photo: 'green',
      rotateFrom: '0',
      rotateTo: '6.73',
    },
  ]);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const stConfig = {
    trigger: '#meet-the-team',
    scroller: 'body',
    start: 'top 0%',
    end: 'top -100%',
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
      })
      .from('#photo1', {
        top: '100%',
        rotate: 0.56,
        duration: 2,
      })
      .from('#photo2', {
        top: '100%',
        rotate: -9.23,
        duration: 2,
      })
      .from('#photo3', {
        top: '100%',
        rotate: 3.93,
        duration: 2,
      });
  });

  useGSAP(() => {
    const photoFadeTL = gsap.timeline(baseConfig);
    photoFadeTL
      .to('#photo0-film', {
        opacity: 0.6,
        duration: 2,
        delay: 3,
      })
      .to('#photo1-film', {
        opacity: 0.6,
        duration: 2,
      })
      .to('#photo2-film', {
        opacity: 0.6,
        duration: 2,
      });
  });

  useGSAP(() => {
    const nameTL = gsap.timeline(baseConfig);
    nameTL
      .to('#name-0', {
        top: 0,
        duration: 2,
        delay: 1,
      })
      .to('#name-1', {
        top: 0,
        duration: 2,
      })
      .to('#name-2', {
        top: 0,
        duration: 2,
      })
      .to('#name-3', {
        top: 0,
        duration: 2,
      });
  });

  useGSAP(() => {
    const nameFadeTL = gsap.timeline(baseConfig);
    nameFadeTL
      .to('#name-0', {
        opacity: 0,
        duration: 2,
        delay: 3,
      })
      .to('#name-1', {
        opacity: 0,
        duration: 2,
      })
      .to('#name-2', {
        opacity: 0,
        duration: 2,
      });
  });

  useGSAP(() => {
    const postTL = gsap.timeline(baseConfig);
    postTL
      .to('#post-0', {
        top: 0,
        duration: 2,
        delay: 1,
      })
      .to('#post-1', {
        top: 0,
        duration: 2,
      })
      .to('#post-2', {
        top: 0,
        duration: 2,
      })
      .to('#post-3', {
        top: 0,
        duration: 2,
      });
  });

  useGSAP(() => {
    const postFadeTL = gsap.timeline(baseConfig);
    postFadeTL
      .to('#post-0', {
        opacity: 0,
        duration: 2,
        delay: 3,
      })
      .to('#post-1', {
        opacity: 0,
        duration: 2,
      })
      .to('#post-2', {
        opacity: 0,
        duration: 2,
      });
  });

  return (
    <>
      <Placeholder />
      <div
        className="bg-[#1A1A1A] text-white relative overflow-x-hidden h-screen"
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

        <div className="flex justify-center items-center flex-col gap-24">
          {/* heading */}
          <h1 className="playfair-display text-7xl mt-24">Meet the Team</h1>

          {/* gallery section */}
          <div
            className=" flex h-[70vh] pt-8 w-full gap-8 overflow-hidden"
            id="gallery"
          >
            {/* names */}
            <div
              id="name"
              className="basis-full md:flex items-center justify-center text-4xl flex-col hidden"
            >
              <div className="h-10 text-center relative w-full overflow-hidden roboto-mono">
                {meetTheTeam.map((item, idx) => {
                  return (
                    <div
                      className="absolute top-full left-1/2 w-full -translate-x-1/3"
                      id={`name-${idx}`}
                      key={idx}
                    >
                      {item.name.toUpperCase()}
                    </div>
                  );
                })}
              </div>
              <div className="w-full translate-x-[20%] h-1 border-2 border-white"></div>
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
              className="basis-full md:flex items-center justify-center text-4xl flex-col hidden playfair-display"
            >
              <div className="h-10 text-center relative w-full overflow-hidden">
                {meetTheTeam.map((item, idx) => {
                  return (
                    <div
                      className="post absolute top-full left-1/2 w-full -translate-x-2/3"
                      id={`post-${idx}`}
                      key={idx}
                    >
                      {item.post}
                    </div>
                  );
                })}
              </div>
              <div className="w-full -translate-x-[20%] h-1 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
      <Placeholder />
    </>
  );
};

export default MeetTheTeam;
