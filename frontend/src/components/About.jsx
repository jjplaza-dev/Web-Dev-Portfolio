import React, { useState } from 'react'
import sand from "../assets/sand.jpg"


function About() {

   

  return <section className='w-full h-[80vh] absolute top-[10vh] bg-amber-400 overflow-hidden' id='aboutSection'>
    {/* <div className='w-full h-full absolute top-0 z-1 bg-[#000000bb]'></div> */}
    <img className='w-[1920px] h-[1280px] scale-125 bg-cover bg-no-repeat absolute hover:top-[-10%]' src={sand}/>
    
  </section>
}

export default About