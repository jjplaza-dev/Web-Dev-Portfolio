import React, { useEffect, useState } from 'react'
import sand from "../assets/sand.jpg"


function About() {
  const [posY, setPosY] = useState()
 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      
      /* console.log((aboutSection.getBoundingClientRect().top/10)*(-1) >= -100) */
    })
    
    
    const aboutSection = document.getElementById("aboutSection")
    if((aboutSection.getBoundingClientRect().top/10)*(-1) >= -200){
      setPosY(Math.round(aboutSection.getBoundingClientRect().top/5)*(-1))
    } else {
      setPosY(0)
    }
    
  })

   

  return <section className='w-full h-[100vh] absolute ' id='aboutSection'>
    {/* <div className='w-full h-full absolute top-0 z-1 bg-[#000000bb]'></div> */}
    <div className='w-full h-[80vh] absolute top-[10vh] bg-green-500 overflow-hidden text-white'>
        <div className='w-full h-full absolute top-0 z-1'>
          <div className='w-full h-fit text-[100px] md:text-[150px] lg:text-[200px] absolute top-[50%] translate-y-[-50%] opacity-20 poiret-one-regular font-extrabold text-center tracking-[-0.05em]'>ABOUT ME</div>
          <div className='w-[75%] lg:w-[60%] lg:max-w-[1000px] h-fit leading-[1em] p-5 lg:p-10 text-[16px] lg:text-[20px] font-extralight'>I'm a web developer who’s really into binge-watching TV series and anime—they're my go-to for inspiration and relaxation. That love for storytelling and cool visuals is a big part of why I dream of becoming a game developer someday. I enjoy building things that are both functional and fun, whether it's a clean website or the early ideas for a game. I'm always up for learning new things and finding creative ways to bring ideas to life through code and design.</div>
        </div>
       <img className='w-[1280px] h-[854px] lg:w-[1920px] lg:h-[1280px] scale-125 bg-cover bg-no-repeat relative duration-500 ease-linear delay-0' style={{transform: `translateY(${posY}px)`}} src={sand}/>
    </div>
   
    
  </section>
}

export default About