const EventDescription = ({ text, id }) => {
  return (
    <div
      className="font-robotoMono text-lg lg:text-2xl text-[#F8F8F8B8] h-full w-full absolute max-w-screen"
      id={`event-${id}`}
    >
      {text}
    </div>
  );
};

export default EventDescription;
