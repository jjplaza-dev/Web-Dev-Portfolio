import React, { useEffect, useState } from 'react'

function Skills() {
    const [scrollY, setScrollY] = useState()
    const [onMiddle, setOnMiddle] = useState()

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
          
          if(skillsBox.getBoundingClientRect().y <= 0){
            setScrollY(skillsBox.getBoundingClientRect().y / skillsBox.getBoundingClientRect().height)

            if((skillsBox.getBoundingClientRect().y)*-1 >= skillsBox.getBoundingClientRect().height/6){ 
         
              setOnMiddle(true)
            } else {
              setOnMiddle(false)
            }
          } else {
            setScrollY(0)
          }

          
        })
      
    })


  return <>
    <section className='w-full h-[400vh] bg-purple-100 ' id='skillsBox'>
        <div className='w-full h-[100vh] sticky top-[0] '>
          <div className='w-full h-full bg-red-500 absolute grid grid-cols-3 items-center'> 
            <div className='w-[80%] aspect-square mx-auto' style={{backgroundColor: `${onMiddle? "green":"yellow"}`}}></div>
            <div className='w-[80%] aspect-square mx-auto' style={{backgroundColor: `${onMiddle? "green":"yellow"}`}}></div>
            <div className='w-[80%] aspect-square mx-auto' style={{backgroundColor: `${onMiddle? "green":"yellow"}`}}></div>
          </div>
          <div className='w-full h-full '>
            <div className='w-full h-[50%] bg-red-200 transition-all ease-out duration-100 delay-10 border-1 border-black' style={{transform: `translateY(${scrollY*200}%)`}}>
              <div className='w-full h-[20%] lg:h-[40%] absolute bottom-1 flex justify-around'>
                {frontendSkills.map((skills, index) => (
                  <div className='h-full aspect-video bg-red-100 mx-0.5 '>{skills.skill}</div>
                ))}
              </div>
            </div>
            <div className='w-full h-[50%] bg-red-200 transition-all ease-out duration-100 delay-10 border-1 border-black' style={{transform: `translateY(${scrollY*-200}%)`}}>
              <div className='w-full h-[20%] lg:h-[40%] absolute top-1 flex justify-around'>
                {frontendSkills.map((skills, index) => (
                  <div className='h-full aspect-video bg-red-100 mx-0.5 '>{skills.skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  </>
}

export default Skills