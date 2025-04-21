import React, { useEffect, useState } from 'react'

function Skills() {
    const [scrollY, setScrollY] = useState()

    const frontendSkills = [ 
        {skill: "HTML", logo: "", description: ""},
        {skill: "CSS", logo: "", description: ""},
        {skill: "SASS", logo: "", description: ""},
        {skill: "GSAP", logo: "", description: ""},
        {skill: "React", logo: "", description: ""},
        {skill: "Javascript", logo: "", description: ""},
        {skill: "Bootstrap", logo: "", description: ""},
        {skill: "Tailwind", logo: "", description: ""},
       
        
    ]

    useEffect(() => {
      const skillsBox = document.getElementById("skillsBox")
   
      window.addEventListener("scroll", () => {
        setScrollY(skillsBox.getBoundingClientRect().y / skillsBox.getBoundingClientRect().height)
        console.log(scrollY)
      })
    })


  return <>
    <section className='w-full h-[500vh] bg-purple-100' id='skillsBox'>
        <div className='w-full h-[100vh] sticky top-[0] '>
          <div className=''>asdasdasdsd</div>
          <div className='w-full h-full rotate-10 scale-150 z-1 translate-y-[-10%]'>
            <div className='w-full h-[50%] bg-purple-200 transition-all ease-out duration-100 delay-10 border-1 border-black' style={{transform: `translateY(${scrollY*100}%)`}}></div>
            <div className='w-full h-[50%] bg-purple-200 transition-all ease-out duration-100 delay-10 border-1 border-black' style={{transform: `translateY(${scrollY*-100}%)`}}></div>
          </div>
        </div>
    </section>
  </>
}

export default Skills