import React, { useEffect, useRef, useState } from 'react'
import apocalypse from "/src/assets/apocalypse.png"
import cyber from "/src/assets/cyber.png"
import quaint from "/src/assets/quaint.png"
import waterway from "/src/assets/waterway.jpg"

function FeaturedWorks() {

  /* useEffect(() => {
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
    <section className='w-[84vw] md:w-[86vw] h-fit relative mx-auto' id='featuredWorks'>
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
  </> */


  useEffect (() => {
     const featuredWorksText =  document.getElementById("featuredWorksText")

     window.addEventListener("scroll", () => {
      const featuredWorksBox = document.getElementById("featuredWorksBox").getBoundingClientRect()
      console.log(`${((featuredWorksBox.y+featuredWorksBox.height/2)-window.innerHeight/2)* -1}px`)
      
    
      featuredWorksText.style.transform = `translate(0, ${((featuredWorksBox.y+featuredWorksBox.height/2)-window.innerHeight/2)* -1}px)`


     })
  })

  

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const bgPics = [apocalypse, cyber, quaint, waterway]
  const items = [0, 1, 2, 3]; // could be dynamic too

  const getClipPath = (index) => {
    return hoveredIndex === index
      ? 'polygon(150% 0%,-50% 0%, 0% 100%, 100% 100%)'
      : 'polygon(100% 0%, 0% 0%, 5% 100%, 95% 100%)';
  };

  return <>
    <section className='w-full h-[200vh] sm:h-[200vh] md:h-[80vh] bg-amber-950 relative overflow-hidden'>
    <div className='w-[100vw] md:w-full h-full bg-amber-100 ' id='featuredWorksBox'>
      <div className="w-full h-[100%] items-center justify-center flex flex-col md:flex-row">
        {items.map((item, index) => (
          <div key={index} className="w-[100%] md:w-[25%] h-full bg-amber-100 transition-all duration-300 ease-in-out grayscale-90 hover:grayscale-0 overflow-hidden z-1 hover:z-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              clipPath: getClipPath(index),
              transition: 'clip-path 0.3s ease-in-out',
              WebkitClipPath: getClipPath(index),
            }}
          >
            <img
              src={bgPics[index]}
              alt={`apocalypse-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    <div className='w-full h-fit text-center text-7xl sm:text-[5.5rem] md:text-[12rem] align-text-bottom absolute top-[30%] opacity-20 z-1 duration-500 delay-0 ease-out transition-all text-wrap sm:text-nowrap select-none' id='featuredWorksText'>FEATURED WORKS</div>
   
    </section>
  </>

}

export default FeaturedWorks