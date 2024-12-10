const Photo = ({ color, rotate, z, top, id }) => {
  return (
    <div
      className="w-[50vh] h-[60vh] bg-white px-[5vh] py-[5vh] absolute team-photo"
      id={id}
      style={{
        transform:
          rotate > 0 ? `rotate(-${rotate}deg)` : `rotate(${-rotate}deg)`,
        zIndex: z,
        top: top,
      }}
    >
      <div
        className="absolute h-full w-full top-0 left-0 shadow-black bg-black shadow-lg opacity-0"
        id={`${id}-film`}
      ></div>
      <div
        className="h-[40vh] w-[40vh] text-3xl text-black justify-center items-center flex"
        style={{ backgroundColor: `${color}` }}
      >
        Photo
      </div>
    </div>
  );
};

export default Photo;
