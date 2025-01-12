import { useState, useEffect } from 'react';

const TextWithModal = () => {
  const [isTruncated, setIsTruncated] = useState(false);

  const fullText = `At our core, we are a passionate collective of innovators, 
  developers, and tech enthusiasts dedicated to pushing the boundaries of 
  technology. Our mission is to create cutting-edge solutions that solve 
  real-world problems and drive digital transformation. With a diverse team 
  of experts spanning multiple domains, we blend creativity, technical 
  expertise, and a relentless pursuit of excellence to deliver impactful 
  technological solutions.`;

  useEffect(() => {
    const checkTextTruncation = () => {
      // Adjust this breakpoint as needed
      setIsTruncated(window.innerWidth < 768);
    };

    // Check on mount
    checkTextTruncation();

    // Add event listener for window resize
    window.addEventListener('resize', checkTextTruncation);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', checkTextTruncation);
    };
  }, []);

  // Function to truncate text
  const getTruncatedText = () => {
    return fullText.slice(0, 201) + '...';
  };

  const handleCLick = () => {
    console.log('clicked!');
  };

  return (
    <div
      className="w-full md:w-4/5 text-center font-robotoMono relative z-10"
      onClick={handleCLick}
    >
      <div className="text-sm md:text-base text-gray-300 px-4">
        {isTruncated ? <>{getTruncatedText()}</> : fullText}
      </div>
    </div>
  );
};

export default TextWithModal;
