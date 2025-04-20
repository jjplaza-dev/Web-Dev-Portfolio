import React, { useEffect, useState, useRef } from 'react';

function Footer() {
  const innerFooterBoxRef = useRef(null);
  const [myScale, setMyScale] = useState()

  useEffect(() => {
    const handleScroll = () => {
      if (innerFooterBoxRef.current) {
        const innerFooterBox = innerFooterBoxRef.current.getBoundingClientRect();
        setMyScale(((innerFooterBox.height - innerFooterBox.y)/innerFooterBox.height)*100)
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <section className='w-screen h-screen bg-amber-300 flex justify-center items-center' ref={innerFooterBoxRef}>
        <div className='h-100 w-100 bg-amber-800' style={{ transform: `scale(${100 + myScale}%)` }}  // Use ref to access the DOM element
        ></div>
      </section>
    </>
  );
}

export default Footer;
