const Photo = ({ color, rotate, z, top, id }) => {
  return (
    <div
      className="lg:w-[60vh] lg:h-[70vh] md:w-[55vh] md:[65vh] sm:w-[50vh] sm:h-[60vh] h-[100vw] w-[80vw] bg-white flex justify-center items-center absolute team-photo flex-col mtt-xs-photo-frame pt-4"
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
      <div className="lg:h-[50vh] md:h-[45vh] sm:h-[40vh] xs:h-[70vw] max-w-[90%] aspect-square text-3xl justify-center items-center flex">
        <img src={color} className="h-full w-full" alt="" />
      </div>
      <div id="spacer" className="h-1/6"></div>
    </div>
  );
};

export default Photo;
