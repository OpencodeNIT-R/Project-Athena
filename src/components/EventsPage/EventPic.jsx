const EventPic = ({ src, id }) => {
  return (
    <div className="w-full h-full absolute" id={`event-${id}`}>
      <img src={src} alt="Event Pic" className="w-full" />
    </div>
  );
};

export default EventPic;
