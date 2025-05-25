import React, { useEffect, useState, useRef } from 'react';

function Footer() {
  const [onBottom, setOnBottom] = useState()
  

  useEffect(() => {
    const footerBox = document.getElementById("footerBox")
    
    window.addEventListener("scroll", () => {
      if(footerBox.getBoundingClientRect().y <= footerBox.getBoundingClientRect().height/10) {
        setOnBottom(true)

      } else {
        setOnBottom(false)
      }
    })
  })


  
  return (
    <>
      <section className={`w-screen h-[100vh] bg-white sticky top-0 z-1 transition-all ease-out duration-300 delay-0`} id='footerBox'>
        <div className='w-[51%] h-[100vh] absolute bg-[#1b1b1b] z-1 px-5' style={{clipPath: `polygon(100% 100%, 100% 30%, 80% 20%, 0% 20%, 0% 100%)`}}> </div>
        <div className='w-[51%] h-[100vh] absolute right-0 bg-[#1b1b1b] z-1' style={{clipPath: `polygon(100% 100%, 100% 20%, 20% 20%, 0% 30%, 0% 100%)`}}> </div>
        <div className='text-white absolute top-[30vh] right-0 z-1 px-5 leading-10 sm:leading-15 lg:leading-30 text-end text-[40px] sm:text-[60px] lg:text-[120px] font-extrabold'>GOT<br/> SOMETHING<br/> IN MIND?</div>
        <div className='text-white absolute top-[45vh] lg:top-[70vh] left-0 z-1 px-5 leading-10 sm:leading-15 lg:leading-30 text-start text-[40px] sm:text-[60px] lg:text-[120px] font-extrabold'>LET'S MAKE <br/> IT HAPPEN.</div>
        <div className='w-full z-2 absolute bottom-0 text-white'>&#169; 2024 - 2025 All Rights Reserved.</div>
      </section>
    </>
  );
}

export default Footer;
