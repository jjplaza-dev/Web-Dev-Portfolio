import React, { useEffect, useRef, useState } from 'react'
import apocalypse from "/src/assets/apocalypse.png"
import cyber from "/src/assets/cyber.png"
import quaint from "/src/assets/quaint.png"
import waterway from "/src/assets/waterway.jpg"

function FeaturedWorks() {
 /*  useEffect (() => {
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
    <div className='w-[100vw] md:w-full h-full bg-white ' id='featuredWorksBox'>
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
          > <p className='absolute text-white'>{index``}</p>
            <img
              src={bgPics[index]}
              alt={`apocalypse-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    <div className='w-full h-fit text-center text-7xl text-white mix-blend-difference sm:text-[5.5rem] md:text-[12rem] align-text-bottom absolute top-[30%] opacity-80 z-1 duration-500 delay-0 ease-out transition-all text-wrap sm:text-nowrap select-none' id='featuredWorksText'>FEATURED WORKS</div>
   
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


  return <>
    <section className='w-full block md:hidden md:w-full md:mx-auto h-[150vh] sm:h-[120vh]'>
    <div className='w-[85vw] md:w-[90vw] h-full grid grid-cols-1 md:grid-cols-2 mx-auto relative'>
      <div className='w-full h-[10vh] bg-amber-400 sticky top-[5vh] z-1'> THIS IS IT </div>
      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 ease-in-out transition-all duration-300 bg-blue-200 md:absolute md:right-0 md:bottom-0 '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 ease-in-out transition-all duration-300 bg-blue-200 md:absolute md:bottom-0 '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 ease-in-out transition-all duration-300 bg-blue-200 md:absolute md:right-0 '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 ease-in-out transition-all duration-300 bg-blue-200 md:absolute  '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
    </div>
    
   


    </section>

    <section className='w-full hidden md:block md:w-full md:mx-auto h-[150vh] sm:h-[120vh] md:h-[120vh] relative overflow-hidden'>
    <div className='w-[85vw] md:w-[90vw] h-[80vh] grid grid-cols-1 md:grid-cols-2 bg-amber-200 my-auto mx-auto' id='featuredWorksBox'>

      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 hover:w-11/12 hover:h-12/12 ease-in-out transition-all duration-300 bg-blue-200 md:absolute md:right-0 md:bottom-0 '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 hover:w-11/12 hover:h-12/12 ease-in-out transition-all duration-300 bg-blue-200 md:absolute md:bottom-0 '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 hover:w-11/12 hover:h-12/12 ease-in-out transition-all duration-300 bg-blue-200 md:absolute md:right-0 '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
      <div className='w-full h-[25vh] sm:h-[100%] md:w-full md:h-full relative'>
        
        <button className='w-full h-full sm:h-3/12 sm:w-12/12 md:w-6/12 z-2 hover:w-11/12 hover:h-12/12 ease-in-out transition-all duration-300 bg-blue-200 md:absolute  '>
          <div className='absolute top-0 left-0 m-1'>2025</div>
          <div className='text-4xl'> Project Name </div>
        </button>
      </div>
    </div>
    <div className='w-fit h-[80vh] text-center text-2xl text-white mix-blend-difference sm:text-[2rem] md:text-[2.5rem] align-text-bottom absolute top-[0%] right-[1%] opacity-80 z-1 duration-500 delay-0 ease-out transition-all text-wrap tracking-[-1px]' style={{textOrientation: "upright", writingMode: "vertical-rl"}} id='featuredWorksText'>FEATURED WORKS</div>
   
    </section>
  </> 

}

export default FeaturedWorks