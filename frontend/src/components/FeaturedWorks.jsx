import React, { useEffect, useRef, useState } from 'react'

function FeaturedWorks() {
  /* const [position, setPosition] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll",(e) => {
      const rect = document.getElementById("featuredWorks").getBoundingClientRect();
      setPosition(rect.y - rect.height)

    })
    
  })
 */
  useEffect(() => {
    const worksBox = document.querySelectorAll('#worksBox');

    worksBox.forEach((worksBox, index) => {
      const rect = worksBox.getBoundingClientRect();
      window.addEventListener('scroll',() => {
        if(window.innerHeight/2 < worksBox.parentElement.getBoundingClientRect().bottom) {
          worksBox.style.backgroundColor = "red";
          worksBox.style.width = "100%";
          worksBox.style.height = "100%"
          worksBox.style.position = "relative"
          worksBox.style.top = "0"
        } else {
          worksBox.style.backgroundColor = "yellow";
          worksBox.style.width = "50%";
          worksBox.style.height = "60px"
          worksBox.style.position = "sticky"
          worksBox.style.top = `60px`
          
        }
        
       /* if((document.getElementById("featuredWorks").getBoundingClientRect().bottom - window.innerHeight) <= 0){
        document.getElementById("featuredText").style.position = "absolute";
       } else {
        document.getElementById("featuredText").style.position = "fixed";
       } */
      })
      
    })
  })

  const myDivRef = useRef(null);

  const handleScroll = () => {
    myDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return <>
    <section className='w-screen h-fit relative' id='featuredWorks'>
      <div className='w-full h-full md:h-full bg-[#101010]'>
        <display className='w-6/12 h-full hidden md:block bg-amber-100 absolute right-0'>
          <div className='w-full h-[90vh] bg-amber-700 sticky top-20'>

          </div>
        </display>

        <ul ref={myDivRef} className='w-12/12 h-120 md:w-6/12 md:h-[70vh]'>
          <div onClick={handleScroll} className='w-12/12 h-full sm:h-20 border-2 border-black ease-in-out transition-all duration-500' id='worksBox'></div>
        </ul>
        <ul className='w-12/12 h-120 md:w-6/12 md:h-[70vh]'>
          <div onClick={handleScroll} className='w-12/12 h-full-120 sm:h-20 border-2 border-black ease-in-out transition-all duration-500' id='worksBox'></div>
        </ul>
        <ul className='w-12/12 h-120 md:w-6/12 md:h-[70vh]'>
          <div onClick={handleScroll} className='w-12/12 h-full-120 sm:h-20 border-2 border-black ease-in-out transition-all duration-500' id='worksBox'></div>
        </ul>
        <ul className='w-12/12 h-120 md:w-6/12 md:h-[70vh]'>
          <div onClick={handleScroll} className='w-12/12 h-full-120 sm:h-20 border-2 border-black ease-in-out transition-all duration-500' id='worksBox'></div>
        </ul>
        <ul className='w-12/12 h-120 md:w-6/12 md:h-[70vh]'>
          <div onClick={handleScroll} className='w-12/12 h-full-120 sm:h-20 border-2 border-black ease-in-out transition-all duration-500' id='worksBox'></div>
        </ul>

        
      </div>
    </section>
  </>
}

export default FeaturedWorks