const EventDescription = ({ text, id }) => {
  return (
    <div
      className="font-robotoMono lg:text-xl text-[#F8F8F8B8] h-full w-full absolute max-w-screen font-light"
      id={`event-${id}`}
    >
      {text}
    </div>
  );
};

export default EventDescription;
