import React, { useEffect, useState, useRef } from 'react';

function Footer() {
  const [onBottom, setOnBottom] = useState()
  

  useEffect(() => {
    const footerBox = document.getElementById("footerBox")
    
    window.addEventListener("scroll", () => {
      if(footerBox.getBoundingClientRect().y <= footerBox.getBoundingClientRect().height/10) {
        setOnBottom(true)
        console.log("ON BOTTOM")
      } else {
        setOnBottom(false)
      }
    })
  })

  return (
    <>
      <section className='w-screen h-[100vh] relative bg-[#1b1b1b] bottom-0 z-1 transition-all ease-out duration-300 delay-0' id='footerBox'>
        <div className='w-[100%] h-[100vh] absolute bg-white z-2' style={{clipPath: `polygon(80% 100%, 50% 30%, 40% 20%, 0% 20%, 0% 100%)`}}></div>
        <div className='w-[100%] h-[100vh] absolute bg-white z-2' style={{clipPath: `polygon(100% 100%, 100% 20%, 60% 20%, 50% 30%, 20% 100%)`}}></div>
      </section>
    </>
  );
}

export default Footer;
