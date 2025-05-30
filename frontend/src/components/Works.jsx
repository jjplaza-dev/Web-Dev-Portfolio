import React, { useState, useRef, useEffect, use } from 'react';
import Footer from './Footer';                              
import About from './About';

function Works() {
  const [myRotate, setMyRotate] = useState()
  
  const worksArr = [
    {
      title: "Project Sample",
      number: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
    {
      title: "Project Sample",
      number: 2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
    {
      title: "Project Sample",
      number: 3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
    {
      title: "Project Sample",
      number: 4,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut harum reiciendis vitae, magnam culpa illo. Consequuntur sit accusantium, minus saepe quas tenetur, provident, repellendus earum reprehenderit fugiat reiciendis qui",
      image: "",
      skills: "HTML, CSS"
    },
  ]
 

  useEffect(() => {
    const handleScroll = () => {
      const wheel = document.getElementById("wheel");
      if (!wheel) return;

      const rect = wheel.getBoundingClientRect();

      setMyRotate((window.innerHeight - rect.top - rect.height))
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  return (
    <section className="w-screen h-fit bg-white" id='works'>
      {worksArr.map((work, index) => (
        <div className='w-full h-[60vh] lg:h-[80vh] relative'>
          <div className='w-full h-11/12 relative border-b-2'>
            <div className='w-full h-[5vh] bg-white sticky top-0 '>
              <div className='w-full h-full px-2 lg:px-10 py-2 flex justify-between relative text-black border-b-2'>
                <div className='flex'><p className='font-thin scale-80 poiret-one-regular '>[ 0{work.number} ]</p> <p className='ml-5 poiret-one-regular font-extrabold'>{work.title}</p></div>
              <div className='mr-4'>{work.skills}</div>
              </div>
            </div>
          </div>
          
        </div>
        
      ))}
      <div className='w-full h-[200vh] z-1 relative'>
        <div className='w-full h-[101vh] absolute top-0 z-2 bg-white '>
          <About />
        </div>
        <div className="w-full h-[30vh] bg-white absolute z-2 top-[100vh] clip-default sm:clip-sm md:clip-md lg:clip-lg" />
        
        <div className={`w-[200px] aspect-square absolute bottom-20 right-[50%] translate-x-[50%] lg:translate-x-0 lg:bottom-10 lg:right-15 z-2 grid grid-cols-3  duration-100`} style={{rotate: `${myRotate/5}deg`}} id='wheel'>
          <div className='w-full h-full bg-white rotate-[-45deg] translate-x-[30%] translate-y-[30%]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
          <div className='w-full h-full bg-white rotate-[0deg]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
          <div className='w-full h-full bg-white rotate-[45deg] translate-x-[-30%] translate-y-[30%]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
          <div className='w-full h-full bg-white rotate-[-90deg]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
          <div className='w-full h-full bg-white ' style={{clipPath: `polygon(60% 90%, 90% 60%, 90% 40%, 60% 10%, 40% 10%, 10% 40%, 10% 60%, 40% 90%)`}}></div>
          <div className='w-full h-full bg-white rotate-[90deg]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
          <div className='w-full h-full bg-white rotate-[-135deg] translate-x-[30%] translate-y-[-30%]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
          <div className='w-full h-full bg-white rotate-[180deg]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
          <div className='w-full h-full bg-white rotate-[135deg] translate-x-[-30%] translate-y-[-30%]' style={{clipPath: `polygon(60% 100%, 70% 30%, 50% 0%, 30% 30%, 40% 100%)`}}></div>
        </div>
        <div className='w-full h-full relative'>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Works;
