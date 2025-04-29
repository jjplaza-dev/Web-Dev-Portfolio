import React, { useEffect, useState } from 'react'

function Front() {
  const [curPos, setCurPos] = useState({x: 250, y: 250})
 
  useEffect(() => {
    const frontBox = document.getElementById("frontBox")
    const profileBox = document.getElementById("profileBox")
    const profileBoxRect = document.getElementById("profileBox").getBoundingClientRect()

    frontBox.addEventListener("mousemove",(e) => {
      setCurPos({x: (profileBoxRect.x + profileBoxRect.width/2) - e.clientX, y: (profileBoxRect.y + profileBoxRect.height/2) - e.clientY})
      profileBox.style.transition = "all ease-out 0s";
    })
    frontBox.addEventListener("mouseleave",() => {
      setCurPos({x: 250, y: 250})
      profileBox.style.transition = "all ease-out 0.4s";
    })
    
  })

  return <>
    <section className='w-screen h-screen relative '>
      <div className='w-full h-[88vh] bg-amber-800 absolute top-[12vh]' id='frontBox'>
        <div className='w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] absolute bottom-[10%] right-[10%] aspect-[1/1.4] bg-amber-50 m-auto' style={{boxShadow: `${curPos.x/10}px ${curPos.y/10}px`}} id='profileBox'>
        <button className='w-10/12 h-10/12 absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] z-1'></button>
        </div>
      </div>
    </section>
  </>
}

export default Front