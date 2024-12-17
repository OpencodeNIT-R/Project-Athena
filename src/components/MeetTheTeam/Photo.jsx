const Photo = ({ color, rotate, z, id }) => {
  return (
    <div
      className="max-w-full lg:h-auto lg:w-4/5 aspect-[4/5] flex flex-col justify-center items-center absolute bg-white top-1/2 left-1/2"
      id={id}
      style={{
        transform:
          rotate > 0
            ? window.innerWidth <= 1024
              ? `rotate(-${rotate}deg) translateX(-50%) translateY(-50%)`
              : `rotate(-${rotate}deg) translateX(-50%) translateY(-70%)`
            : window.innerWidth <= 1024
              ? `rotate(${-rotate}deg) translateX(-50%) translateY(-50%)`
              : `rotate(${-rotate}deg) translateX(-50%) translateY(-70%)`,
        zIndex: z,
      }}
    >
      <div
        className="absolute h-full w-full top-0 left-0 shadow-black bg-black shadow-xl opacity-0"
        id={`${id}-film`}
      ></div>
      <div className="aspect-square w-[90%] justify-center items-center flex">
        <img src={color} className="h-full w-full" alt="" />
      </div>
      <div id="spacer" className="h-1/6"></div>
    </div>
  );
};

export default Photo;
