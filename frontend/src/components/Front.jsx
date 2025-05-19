import React, { useEffect, useState } from 'react'

function Front() {
  const [curPos, setCurPos] = useState({x: 250, y: 250})
  const [position, setPosition] = useState({ x: 0, y: 0 });


   
 
  useEffect(() => {
    const frontBox = document.getElementById("frontBox")
    const profileBox = document.getElementById("profileBox")
    const profileBoxRect = document.getElementById("profileBox").getBoundingClientRect()

   
    
    const interval = setInterval(() => {
      const randomX = Math.floor(Math.random() * 10) + 1;
      const randomY = Math.floor(Math.random() * 10) + 1;

      setPosition({ x: randomX, y: randomY });
    }, 1000);

    // Cleanup interval on unmount
    console.log(position)
    return () => clearInterval(interval);
  })

 

  return <>
    <section className='w-full h-screen relative '>
      <div className='w-full h-full bg-[#1b1b1b] absolute ' id='frontBox'>
        <div className='w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] ease-in-out transition-all duration-1000 delay-0 absolute bottom-[10%] right-[10%] aspect-[1/1.4] bg-amber-50 hover:bg-amber-200 m-auto ' style={{boxShadow: `${curPos.x/10}px ${curPos.y/10}px gray`, transform: `translate(${position.x}px, ${position.y}px)`}} id='profileBox'>
        <button className='w-10/12 h-10/12 absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] z-1'></button>
        </div>
      </div>
    </section>
  </>
}

export default Front