const EventsHeader = () => {
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
        className="w-3/4 font-robotoMono text-[#F8F8F8B8] text-lg lg:text-2xl text-center leading-10 tracking-wide"
        id="events-page-desc"
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos consectetur
        adipiscing elit
      </div>
      <div className="flex h-32 lg:h-[30rem] overflow-hidden gap-4 lg:gap-12 justify-center items-center w-[120dvw]">
        <div className="w-[30%] h-[90%] rounded lg:rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8197_bqosvx.png"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="w-[40%] h-full rounded lg:rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8050_ptbz0x.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-[30%] h-[90%] rounded lg:rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1734165998/image_8054_liggqt.png"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsHeader;
