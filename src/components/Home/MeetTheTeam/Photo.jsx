const Photo = ({ src, rotate, z, id }) => {
  return (
    <div
      className={
        'portrait:max-h-full landscape:w-[80%] aspect-[4/5] flex flex-col justify-center items-center absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' +
        rotate
      }
      id={id}
      style={{
        zIndex: z,
      }}
    >
      <div
        className="absolute h-full w-full top-0 left-0 shadow-black bg-black shadow-xl opacity-0"
        id={`${id}-film`}
      ></div>
      <div className="aspect-square w-[90%] justify-center items-center flex">
        <img src={src} className="h-full w-full" alt="" />
      </div>
      <div id="spacer" className="h-1/6"></div>
    </div>
  );
};

export default Photo;
