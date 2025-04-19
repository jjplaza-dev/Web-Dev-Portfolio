import React, { useEffect, useState } from 'react';

function Footer() {
  const [divBend, setDivBend] = useState(0); // Initialize with a default value

  useEffect(() => {
    const footerBox = document.getElementById("footerBox");

    const handleScroll = () => {
      if (footerBox) { // Check if footerBox is not null
        const rect = footerBox.getBoundingClientRect();
        setDivBend((90 / rect.y) * 80);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <>
      <section className='w-screen h-screen bg-amber-300 relative'> 
        <div 
          className='ellipse w-full h-[90%] absolute bottom-0 bg-amber-200 ease-out duration-500' 
          style={{ clipPath: `ellipse(100% ${divBend}% at bottom center)` }} 
          id='footerBox'
        ></div>
        <div className='w-full h-[10%] bg-white absolute bottom-0'></div>
      </section>
    </>
  );
}

export default Footer;
