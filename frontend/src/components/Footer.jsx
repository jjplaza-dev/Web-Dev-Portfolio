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
      <section className='w-screen h-[120vh] bg-green-100 absolute bottom-0 z-1 transition-all ease-out duration-300 delay-0' style={{clipPath: `ellipse(${onBottom? "100% 100% at bottom center" : "80% 80% at bottom center"})`}} id='footerBox'>
        <div className='w-[100%] h-[80%] bg-green-200 absolute bottom-0 transition-all ease-in-out duration-300 delay-0' style={{clipPath: `ellipse(${onBottom? "80% 80%" : "60% 60%"} at bottom center)`}}></div>
      </section>
    </>
  );
}

export default Footer;
