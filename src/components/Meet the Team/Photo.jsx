const Photo = ({ color, rotate, z, top, id }) => {
  return (
    <div
      className="lg:w-[60vh] lg:h-[70vh] sm:w-[50vh] sm:h-[60vh]  w-[80vw] h-[100vw] bg-white flex justify-center items-center absolute team-photo flex-col"
      id={id}
      style={{
        transform:
          rotate > 0 ? `rotate(-${rotate}deg)` : `rotate(${-rotate}deg)`,
        zIndex: z,
        top: top,
      }}
    >
      <div
        className="absolute h-full w-full top-0 left-0 shadow-black bg-black shadow-xl opacity-0"
        id={`${id}-film`}
      ></div>
      <div className="lg:h-[50vh] h-[60vw] aspect-square text-3xl text-black justify-center items-center flex">
        <img src={color} className="h-full w-full" alt="" />
      </div>
      <div id="spacer" className="h-1/6"></div>
    </div>
  );
};

export default Photo;
