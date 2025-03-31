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

  const divRefs = useRef([]);

  const handleScroll = (index) => {
    if (divRefs.current[index]) {
      divRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return <>
    <section className='w-screen h-fit relative' id='featuredWorks'>
      <div className='w-full h-full md:h-full bg-[#101010]'>
        <div className='w-6/12 h-full hidden md:block bg-white absolute right-0'>
          <div className='w-full h-[10vh] sticky top-[10vh] z-1 text-8xl text-center bottom-0 mix-blend-difference text-white'>FEATURED WORK</div>
          <div className='w-full h-[80vh] bg-[#101010] sticky top-[20vh]'></div>
        </div>

        {[...Array(5)].map((_, index) => (
        <ul
          key={index}
          ref={(reference) => (divRefs.current[index] = reference)}
          className="w-12/12 h-120 md:w-6/12 md:h-[70vh]"
        >
          <div
            onClick={() => handleScroll(index)}
            className="w-12/12 h-full sm:h-20 border-2 border-black ease-in-out transition-all duration-500"
            id="worksBox"
          ></div>
        </ul>
      ))}

        
      </div>
    </section>
  </>
}

export default FeaturedWorks