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
      <section className='w-screen h-[100vh] bg-[#1b1b1b] bottom-0 z-1 transition-all ease-out duration-300 delay-0 relative' id='footerBox'>
        <div className='w-[50%] h-[100vh] absolute bg-white z-1 border-2 border-white px-5' style={{clipPath: `polygon(100% 100%, 100% 30%, 80% 20%, 0% 20%, 0% 100%)`}}>
          <div className='absolute bottom-0 text-black'>&#169; 2024 - 2025 All Rights Reserved.</div>
        </div>
        <div className='w-[50%] h-[100vh] absolute right-0 bg-white z-1 border-2 border-white' style={{clipPath: `polygon(100% 100%, 100% 20%, 20% 20%, 0% 30%, 0% 100%)`}}>
         
        </div>
         <div className='text-black absolute top-[25vh] right-0 z-1 px-5 leading-20 lg:leading-30 text-end text-[50px] sm:text-[80px] lg:text-[120px] font-extrabold'>GOT<br/> SOMETHING<br/> IN MIND?</div>
          <div className='text-black absolute bottom-[5vh] left-0 z-1 px-5 leading-20 lg:leading-30 text-start text-[50px] sm:text-[80px] lg:text-[120px] font-extrabold'>LET'S MAKE <br/> IT HAPPEN.</div>
        
      </section>
    </>
  );
}

export default Footer;
