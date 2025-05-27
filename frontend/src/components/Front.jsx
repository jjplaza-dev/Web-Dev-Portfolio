import React, { useEffect, useState } from 'react'

function Front() {
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const boxMaxX = 200;
  const boxMaxY = 100;
  const distanceTravel = 20;

useEffect(() => {
  const interval = setInterval(() => {
    
    setCurrentPos(prevPos => {
      if (prevPos.x < boxMaxX && prevPos.y <= 0) {
        return { x: prevPos.x + distanceTravel, y: prevPos.y };

      } else if (prevPos.y < boxMaxY && prevPos.x >= boxMaxX) {
        return { x: prevPos.x, y: prevPos.y + distanceTravel };

      } else if (prevPos.x > 0 && prevPos.y >= boxMaxY) {
        return { x: prevPos.x - distanceTravel, y: prevPos.y };

      } else if (prevPos.y > 0 && prevPos.x <= 0) {
        return { x: prevPos.x, y: prevPos.y - distanceTravel };
      }
         else {
        clearInterval(interval); // stop when both x and y are > 100
        return prevPos;
      }
    });
  }, 200);

  return () => clearInterval(interval); // Cleanup on unmount
}, []);



   useEffect(() => {
      const mySquare = document.querySelectorAll("#squareTest")
      mySquare.forEach(e => {
        e.style.transform = `translate(${currentPos.x*(e.getBoundingClientRect().width/50)}px, ${currentPos.y*(e.getBoundingClientRect().width/50)}px) rotate(${currentPos.x}deg)`
      });
      
   })

  const myWord = "freelance"
  const myWordArr = myWord.split("")

  const myTitle = "Web Developer"
  const myTitleArr = myTitle.split("")

  const myName = "Jurist Plaza"
  const myNameArr = myName.split("")


  return <>
    <section className='w-full h-[200vh] relative bg-white'>
      
       
      
    
      <div className='w-full h-[184vh] absolute top-[16vh]'>
        <div className='w-full h-[84vh] sticky top-[16vh] flex justify-center items-center p-2 lg:p-10'>
            <div className='w-[90%] lg:w-[75%] h-[90vw] lg:h-[70%] absolute right-[50%] translate-x-[50%] flex flex-col '>
                <div className={`w-full h-full flex flex-col lg:flex-row text-[10vw] sm:text-[8vw] lg:text-[7vw]  `}>
                  <div className='w-full h-full text-nowrap flex items-center'>
                    {myWordArr.map((text, index) => (
                      <span className='text-[15vw] lg:text-[10vw] m-[2px] inline-block tracking-tighter leading-[1] poiret-one-regular rotate-y-0 hover:rotate-y-90 duration-700' key={index} id='wordText' >{text}</span>
                    ))}
                  </div>
                  <div className='w-full h-full '></div>  
                </div>
                
                <div className='w-full h-full flex flex-col lg:flex-row-reverse text-[10vw] sm:text-[8vw] lg:text-[7vw] items-center text-nowrap'>
                   <div className='w-full h-full text-nowrap flex items-center'>
                    {myTitleArr.map((text, index) => (
                      <span className='text-[12vw] lg:text-[10vw] m-[1px] min-h-[10px] min-w-[8px] lg:min-w-[20px] inline-block tracking-tighter leading-[1] poiret-one-regular' key={index} id='titleText'>{text}</span>
                    ))}
                  </div>
                  <div className='w-full h-full relative'> 
                    <div className='w-[2vw] min-w-[10px] max-w-[50px] h-[2vw] min-h-[10px] max-h-[50px] bg-black duration-1000' id='squareTest'></div>
                  </div>

                </div>
                <div className='w-full h-full flex flex-col lg:flex-row text-[7vw] items-center'>
                   <div className='w-full h-full text-nowrap flex items-center'>
                    {myNameArr.map((text, index) => (
                      <span className='text-[10vw] rotate-y-0 hover:rotate-y-90 min-h-[10px] min-w-[8px] lg:min-w-[20px] inline-block tracking-tighter leading-[1] sedgwick-ave-display-regular' key={index} id='nameText'>{text}</span>
                    ))}
                  </div> 
                  <div className='w-full h-full text-[20px] flex items-center px-0 lg:px-10 leading-[1]'>
                    <div>I am a freelance digital designer, dedicated to
creating an online presence that meets business
objectives and boosts conversions.</div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div className='w-full h-[100vh] bg-[#0d0d3f33] backdrop-blur-[20px] absolute bottom-0 p-2 lg:p-10 '>
       
      </div>
    </section>
  </>
}

export default Front