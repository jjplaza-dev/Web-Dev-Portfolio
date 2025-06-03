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
    

        <div className='w-full h-[80vh] absolute top-[10vh] bg-blackoverflow-hidden text-white'>
            <div className='w-full h-full absolute top-0 z-1'>
              <button className='w-fit h-fit text-[60px] md:text-[150px] lg:text-[200px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] opacity-20 poiret-one-regular font-extrabold text-center tracking-[0.06em] text-nowrap px-2 lg:px-10'>LET'S TALK</button>
             </div>
        </div>

        <div className='w-full z-2 absolute bottom-0 text-white'>&#169; 2024 - 2025 All Rights Reserved.</div>
      </section>
    </>
  );
}

export default Footer;
