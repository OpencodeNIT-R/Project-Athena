import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

const WrapCharacters = ({ children }) => {
  const wrapNode = (node) => {
    if (typeof node === 'string') {
      return node.split('').map((char, index) => (
        <span key={index} className="opacity-0">
          {char}
        </span>
      ));
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node, {
        children: React.Children.map(node.props.children, wrapNode),
      });
    }

    return node;
  };

  return <>{React.Children.map(children, wrapNode)}</>;
};

const Heading = ({ children, extraCSS }) => {
  const headingRef = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const spans = headingRef.current.querySelectorAll('span');
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });
  });

  return (
    <h1
      ref={headingRef}
      className="md:text-7xl text-2xl font-playfair font-[600]"
      style={extraCSS || {}}
    >
      <WrapCharacters>{children}</WrapCharacters>
    </h1>
  );
};

export default Heading;
