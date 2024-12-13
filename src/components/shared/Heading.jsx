const Heading = ({ children, extraCSS }) => {
  return (
    <h1
      className="md:text-7xl text-2xl playfair-display font-[600]"
      style={extraCSS ? extraCSS : {}}
    >
      {children}
    </h1>
  );
};

export default Heading;
