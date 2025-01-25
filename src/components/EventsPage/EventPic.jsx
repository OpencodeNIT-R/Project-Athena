const EventPic = ({ src, id }) => {
  return (
    <div className="w-full h-full border absolute" id={`event-${id}`}>
      Event Pic {src}
    </div>
  );
};

export default EventPic;
