import React, { useEffect, useState, useRef } from 'react';

function Footer() {
  const [posY, setPosY] = useState()
  

  useEffect(() => {
    const footerBox = document.getElementById("footerBox")
    
    window.addEventListener("scroll", () => {
      setPosY(100/footerBox.getBoundingClientRect().y)
    })
  })

  return (
    <>
      <section className='w-screen h-screen  absolute bottom-0 z-2' id='footerBox'>
        <div className='w-[100%] h-[100%] bg-green-200 absolute bottom-0 transition-all duration-0 delay-0' style={{clipPath: `ellipse(${posY*100}% ${posY*100}% at bottom center)`}}></div>
      </section>
    </>
  );
}

export default Footer;
