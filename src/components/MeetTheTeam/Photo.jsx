const Photo = ({ color, rotate, z, id }) => {
  return (
    <div
      className="2xl:h-[40vw] 2xl:w-[30vw] lg:h-[50vw] lg:w-[40vw] md:h-[60vw] md:w-[50vw] h-[100vw] w-[80vw] flex flex-col justify-center items-center absolute bg-white team-photo mtt-xs-photo-frame ishlt800px top-1/2 left-1/2"
      id={id}
      style={{
        transform:
          rotate > 0
            ? `rotate(-${rotate}deg) translateX(-50%) translateY(-50%)`
            : `rotate(${-rotate}deg) translateX(-50%) translateY(-50%)`,
        zIndex: z,
      }}
    >
      <div
        className="absolute h-full w-full top-0 left-0 shadow-black bg-black shadow-xl opacity-0"
        id={`${id}-film`}
      ></div>
      <div className="aspect-square max-w-[90%] w-full justify-center items-center flex">
        <img src={color} className="h-full w-full" alt="" />
      </div>
      <div id="spacer" className="h-1/6"></div>
    </div>
  );
};

export default Photo;
